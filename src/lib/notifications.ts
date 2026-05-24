/**
 * Notification Service
 * Handles WhatsApp Cloud API, Twilio SMS, and wa.me deep link fallback
 */

interface SendReceiptParams {
  phone: string;
  customerName: string;
  orderRef: string;
  items: { name: string; qty: number; subtotal: number }[];
  total: number;
  date: string;
  time: string;
}

interface NotificationResult {
  success: boolean;
  method: "whatsapp_api" | "sms" | "deeplink" | "failed";
  messageId?: string;
  error?: string;
  deepLink?: string;
}

// ─── WhatsApp Cloud API ──────────────────────────────────────────────────────
async function sendWhatsAppCloudAPI(
  phone: string,
  message: string
): Promise<{ success: boolean; messageId?: string; error?: string }> {
  const token = process.env.WHATSAPP_ACCESS_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const version = process.env.WHATSAPP_API_VERSION || "v19.0";

  if (!token || !phoneNumberId) {
    return { success: false, error: "WhatsApp API not configured" };
  }

  const normalizedPhone = normalizePhone(phone);

  try {
    const res = await fetch(
      `https://graph.facebook.com/${version}/${phoneNumberId}/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          recipient_type: "individual",
          to: normalizedPhone,
          type: "text",
          text: { body: message },
        }),
      }
    );

    const data = await res.json();
    if (!res.ok) {
      return { success: false, error: data.error?.message || "API error" };
    }
    return { success: true, messageId: data.messages?.[0]?.id };
  } catch (err) {
    return {
      success: false,
      error: err instanceof Error ? err.message : "Network error",
    };
  }
}

// ─── Twilio SMS ───────────────────────────────────────────────────────────────
async function sendTwilioSMS(
  phone: string,
  message: string
): Promise<{ success: boolean; messageId?: string; error?: string }> {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_PHONE_NUMBER;

  if (!accountSid || !authToken || !from) {
    return { success: false, error: "Twilio not configured" };
  }

  const normalizedPhone = normalizePhone(phone);
  const credentials = Buffer.from(`${accountSid}:${authToken}`).toString(
    "base64"
  );

  try {
    const res = await fetch(
      `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${credentials}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          To: normalizedPhone,
          From: from,
          Body: message,
        }).toString(),
      }
    );

    const data = await res.json();
    if (!res.ok) {
      return {
        success: false,
        error: data.message || "Twilio error",
      };
    }
    return { success: true, messageId: data.sid };
  } catch (err) {
    return {
      success: false,
      error: err instanceof Error ? err.message : "Network error",
    };
  }
}

// ─── Build message ────────────────────────────────────────────────────────────
export function buildReceiptMessage(params: SendReceiptParams): string {
  const pad = (s: string, l: number) =>
    s + " ".repeat(Math.max(1, l - s.length));
  const itemLines = params.items
    .map((i) => {
      const label = `${i.qty}x ${i.name}`;
      return `${pad(label, 30)}₦${i.subtotal.toLocaleString()}`;
    })
    .join("\n");

  return `┌─────────────────────────┐
│    🍽 VICKY'S CUISINE    │
│    Official Receipt      │
└─────────────────────────┘

📌 Ref: ${params.orderRef}
📅 ${params.date}
🕐 ${params.time}

👤 Customer: *${params.customerName}*

─────────────────────────
       ORDER DETAILS
─────────────────────────
${itemLines}
─────────────────────────
💰 TOTAL        ₦${params.total.toLocaleString()}
─────────────────────────

✅ *PAYMENT RECEIVED*

_This is your official receipt._
_Please keep for your records._

_Vicky's Cuisine — prices_
_are inclusive of all charges_ 🙏`;
}

// ─── Build WA deep link ───────────────────────────────────────────────────────
export function buildWhatsAppDeepLink(
  phone: string,
  message: string
): string {
  const normalized = normalizePhone(phone);
  return `https://wa.me/${normalized}?text=${encodeURIComponent(message)}`;
}

// ─── Main send function with fallback ─────────────────────────────────────────
export async function sendReceiptNotification(
  params: SendReceiptParams
): Promise<NotificationResult> {
  const message = buildReceiptMessage(params);

  // 1. Try WhatsApp Cloud API
  const waResult = await sendWhatsAppCloudAPI(params.phone, message);
  if (waResult.success) {
    return {
      success: true,
      method: "whatsapp_api",
      messageId: waResult.messageId,
    };
  }

  // 2. Fallback to Twilio SMS
  const smsResult = await sendTwilioSMS(params.phone, message);
  if (smsResult.success) {
    return {
      success: true,
      method: "sms",
      messageId: smsResult.messageId,
    };
  }

  // 3. Fallback: return deep link for manual sending
  const deepLink = buildWhatsAppDeepLink(params.phone, message);
  return {
    success: false,
    method: "deeplink",
    deepLink,
    error: `WA API: ${waResult.error} | SMS: ${smsResult.error}`,
  };
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
export function normalizePhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.startsWith("0") && digits.length === 11) {
    return "234" + digits.slice(1); // Nigerian number
  }
  if (!digits.startsWith("+") && !digits.startsWith("234")) {
    return "234" + digits;
  }
  return digits;
}
