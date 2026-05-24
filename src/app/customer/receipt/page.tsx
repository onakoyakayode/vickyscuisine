"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { useOrderStore } from "@/store/orderStore";
import { formatCurrency, formatDateTime } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  CheckCircle2,
  MessageCircle,
  Download,
  ArrowLeft,
  Loader2,
  Clock,
  Copy,
  Check,
} from "lucide-react";
import {
  buildReceiptMessage,
  buildWhatsAppDeepLink,
} from "@/lib/notifications";
import { Suspense } from "react";

function ReceiptContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const ref = searchParams.get("ref");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { clearOrder } = useOrderStore();
  const [canvasDone, setCanvasDone] = useState(false);
  const [copied, setCopied] = useState("");

  const { data, isLoading, error } = useQuery({
    queryKey: ["order", ref],
    queryFn: async () => {
      const res = await fetch(`/api/orders/${ref}`);
      const json = await res.json();
      if (!json.success) throw new Error(json.error);
      return json.data.order;
    },
    enabled: !!ref,
  });

  useEffect(() => {
    if (data && canvasRef.current) {
      drawReceipt(data);
      setCanvasDone(true);
    }
  }, [data]);

  useEffect(() => {
    // Clear the in-progress order from store once receipt is shown
    if (data) clearOrder();
  }, [data]);

  const drawReceipt = (order: Record<string, unknown>) => {
    const cv = canvasRef.current;
    if (!cv) return;
    const items = order.items as {
      name: string;
      qty: number;
      price: number;
      subtotal: number;
    }[];
    const { date, time } = formatDateTime(order.createdAt as string);
    const W = 480;
    const lh = 24;
    const H = Math.max(620, 200 + items.length * lh + 220);
    cv.width = W;
    cv.height = H;
    const ctx = cv.getContext("2d")!;

    // Background
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, W, H);

    // Watermark
    ctx.save();
    ctx.globalAlpha = 0.04;
    ctx.translate(W / 2, H / 2);
    ctx.rotate(-Math.PI / 7);
    ctx.font = "bold 64px sans-serif";
    ctx.fillStyle = "#C9A84C";
    ctx.textAlign = "center";
    ctx.fillText("Vicky's Cuisine", 0, -20);
    ctx.font = "bold 26px sans-serif";
    ctx.fillText("OFFICIAL RECEIPT", 0, 38);
    ctx.restore();

    // Header
    ctx.fillStyle = "#1A1208";
    ctx.fillRect(0, 0, W, 70);
    ctx.fillStyle = "#C9A84C";
    ctx.font = "bold 22px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Vicky's Cuisine", W / 2, 36);
    ctx.fillStyle = "#8a6e3a";
    ctx.font = "10px sans-serif";
    ctx.fillText("OFFICIAL PAYMENT RECEIPT", W / 2, 54);
    ctx.fillStyle = "#C9A84C";
    ctx.fillRect(0, 68, W, 2.5);

    // Ref
    ctx.fillStyle = "#999";
    ctx.font = "10px monospace";
    ctx.textAlign = "right";
    ctx.fillText("Ref: " + order.ref, W - 16, 90);

    // Meta
    const meta: [string, string][] = [
      ["Customer", order.customerName as string],
      ["Phone", (order.customerPhone as string) || "—"],
      ["Date", date],
      ["Time", time],
      [
        "Status",
        order.paymentStatus === "PAID"
          ? "PAID ✓"
          : "PENDING — PAY AT COUNTER OR MAKE TRANSFER",
      ],
    ];
    let y = 110;
    meta.forEach(([k, v]) => {
      ctx.font = "11px sans-serif";
      ctx.fillStyle = "#999";
      ctx.textAlign = "left";
      ctx.fillText(k + ":", 16, y);
      ctx.font =
        k === "Status" ? "bold 12px sans-serif" : "500 12px sans-serif";
      ctx.fillStyle =
        k === "Status" && order.paymentStatus !== "PAID"
          ? "#e67e00"
          : "#1A1208";
      ctx.fillText(v, 110, y);
      y += 20;
    });

    // Divider
    y += 6;
    dashed(ctx, 16, y, W - 16, "#ccc");
    y += 14;

    // Table header
    ctx.font = "10px sans-serif";
    ctx.fillStyle = "#aaa";
    ctx.textAlign = "left";
    ctx.fillText("ITEM", 16, y);
    ctx.textAlign = "center";
    ctx.fillText("QTY", W * 0.72, y);
    ctx.textAlign = "right";
    ctx.fillText("AMOUNT", W - 16, y);
    y += 5;
    line(ctx, 16, y, W - 16, "#eee");
    y += 14;

    items.forEach((item, i) => {
      if (i % 2 === 0) {
        ctx.fillStyle = "#fafafa";
        ctx.fillRect(0, y - 14, W, lh);
      }
      ctx.font = "12px sans-serif";
      ctx.fillStyle = "#1A1208";
      ctx.textAlign = "left";
      const nm =
        item.name.length > 34 ? item.name.slice(0, 34) + "…" : item.name;
      ctx.fillText(nm, 16, y);
      ctx.textAlign = "center";
      ctx.fillText("×" + item.qty, W * 0.72, y);
      ctx.textAlign = "right";
      ctx.fillText("₦" + item.subtotal.toLocaleString(), W - 16, y);
      y += lh;
    });

    y += 8;
    line(ctx, 16, y, W - 16, "#C9A84C", 2);
    y += 20;
    ctx.font = "bold 17px Georgia";
    ctx.fillStyle = "#1A1208";
    ctx.textAlign = "left";
    ctx.fillText("TOTAL", 16, y);
    ctx.textAlign = "right";
    ctx.fillText("₦" + (order.total as number).toLocaleString(), W - 16, y);

    // Payment status box
    y += 28;
    if (order.paymentStatus === "PAID") {
      ctx.strokeStyle = "#25D366";
      ctx.lineWidth = 1.5;
      ctx.setLineDash([]);
      rrect(ctx, (W - 180) / 2, y, 180, 32, 6);
      ctx.stroke();
      ctx.font = "bold 12px sans-serif";
      ctx.fillStyle = "#25D366";
      ctx.textAlign = "center";
      ctx.fillText("✓ PAYMENT RECEIVED", W / 2, y + 21);
    } else {
      ctx.fillStyle = "#fff7e6";
      ctx.strokeStyle = "#e67e00";
      ctx.lineWidth = 1.5;
      ctx.setLineDash([]);
      rrect(ctx, (W - 220) / 2, y, 220, 32, 6);
      ctx.fill();
      ctx.stroke();
      ctx.font = "bold 11px sans-serif";
      ctx.fillStyle = "#e67e00";
      ctx.textAlign = "center";
      ctx.fillText("⏳ PRESENT THIS AT THE COUNTER", W / 2, y + 21);
    }

    y += 50;
    dashed(ctx, 16, y, W - 16, "#ddd");
    y += 14;
    ctx.font = "10px sans-serif";
    ctx.fillStyle = "#bbb";
    ctx.textAlign = "center";
    ctx.fillText("Prices are inclusive of all charges.", W / 2, y);
    ctx.fillText(
      "Thank you for dining with Vicky's Cuisine! 🍽",
      W / 2,
      y + 14,
    );

    ctx.strokeStyle = "#C9A84C";
    ctx.lineWidth = 2;
    ctx.setLineDash([]);
    ctx.strokeRect(1, 1, W - 2, H - 2);
  };

  const copyText = async (text: string, key: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(key);

    setTimeout(() => {
      setCopied("");
    }, 2000);
  };

  const bankAccounts = [
    {
      bank: "Sterling Bank",
      accountNumber: "0000001234",
      accountName: "Vicky's Cuisine",
      logo: "/banks/sterling.png",
    },
    {
      bank: "Moniepoint",
      accountNumber: "1200001234",
      accountName: "Vicky's Cuisine",
      logo: "/banks/moniepoint.png",
    },
  ];

  const handleWhatsApp = () => {
    if (!data?.customerPhone) {
      alert("No phone number on this order.");
      return;
    }
    const { date, time } = formatDateTime(data.createdAt);
    const message = buildReceiptMessage({
      phone: data.customerPhone,
      customerName: data.customerName,
      orderRef: data.ref,
      items: data.items,
      total: data.total,
      date,
      time,
    });
    window.open(buildWhatsAppDeepLink(data.customerPhone, message), "_blank");
  };

  const handleDownload = () => {
    const cv = canvasRef.current;
    if (!cv) return;
    const a = document.createElement("a");
    a.download = `vickys-receipt-${data?.ref}.png`;
    a.href = cv.toDataURL("image/png");
    a.click();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0d0904] flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-10 h-10 text-[#c9a84c] animate-spin mx-auto mb-3" />
          <p className="text-[#8a6e3a]">Loading your receipt…</p>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-[#0d0904] flex items-center justify-center p-4">
        <div className="text-center">
          <p className="text-red-400 mb-4">Receipt not found</p>
          <button
            onClick={() => router.push("/")}
            className="text-[#c9a84c] text-sm"
          >
            ← Back to menu
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d0904] pb-10">
      <header className="bg-[#1a1208] border-b border-[#3d2b10] px-4 py-3">
        <div className="max-w-lg mx-auto flex items-center gap-3">
          <button
            onClick={() => router.push("/")}
            className="text-[#8a6e3a] hover:text-[#c9a84c]"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="font-sans text-[#c9a84c] font-bold text-sm sm:text-base">
            Your Receipt
          </h1>
        </div>
      </header>

      <div className="w-full max-w-lg mx-auto px-3 sm:px-4 pt-4 sm:pt-6 space-y-4">
        {/* Success banner */}
        <div className="bg-[#1a1208] border border-[#c9a84c]/30 rounded-xl p-3 sm:p-4 flex gap-3 items-start animate-fade-slide-up">
          {data.paymentStatus === "PAID" ? (
            <CheckCircle2
              className="text-green-400 flex-shrink-0 mt-0.5"
              size={20}
            />
          ) : (
            <Clock className="text-amber-400 flex-shrink-0 mt-0.5" size={20} />
          )}
          <div>
            <p className="text-[#fdf9ec] font-semibold text-sm sm:text-base">
              {data.paymentStatus === "PAID"
                ? "Payment confirmed!"
                : "Order placed successfully!"}
            </p>
            <p className="text-[#8a6e3a] text-[11px] sm:text-xs mt-0.5 leading-relaxed">
              {data.paymentStatus === "PAID"
                ? "Enjoy your meal!"
                : "Pay at the counter or transfer to any account below"}
            </p>
          </div>
        </div>

        {/* Canvas receipt */}
        <div className="rounded-xl overflow-x-auto border border-[#3d2b10] bg-white">
          <canvas ref={canvasRef} className="w-full h-auto block bg-white" />
        </div>

        {/* Bank Transfer Modal */}

        {data.paymentStatus !== "PAID" && (
          <Dialog>
            <DialogTrigger asChild>
              <button
                className="
  w-full
  bg-[#c9a84c]
  hover:bg-[#d8b866]
  text-[#1a1208]
  font-semibold
  py-3
  rounded-xl
  transition-all
  text-sm
  sm:text-base
"
              >
                Make Transfer
              </button>
            </DialogTrigger>

            <DialogContent
              className="
    bg-[#1a1208]
    border
    border-[#3d2b10]
    text-white
    w-[95vw]
    max-w-md
    max-h-[90vh]
    overflow-y-auto
    rounded-2xl
    p-4
    sm:p-6
  "
            >
              <DialogHeader>
                <DialogTitle className="text-[#c9a84c] text-lg">
                  Bank Transfer
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-4 mt-2">
                {/* Amount */}
                <div className="bg-[#0d0904] border border-[#3d2b10] rounded-xl p-4">
                  <p className="text-[#8a6e3a] text-xs uppercase tracking-wider">
                    Amount
                  </p>

                  <div className="flex items-center justify-between mt-1">
                    <p className="text-[#fdf9ec] font-bold text-2xl">
                      {formatCurrency(data.total)}
                    </p>

                    <button
                      onClick={() => copyText(String(data.total), "amount")}
                      className="flex items-center gap-1 text-xs bg-[#c9a84c]/10
              hover:bg-[#c9a84c]/20 text-[#c9a84c] px-3 py-2 rounded-lg"
                    >
                      {copied === "amount" ? (
                        <Check size={14} />
                      ) : (
                        <Copy size={14} />
                      )}

                      {copied === "amount" ? "Copied" : "Copy"}
                    </button>
                  </div>
                </div>

                {/* Reference */}
                <div className="bg-[#0d0904] border border-[#3d2b10] rounded-xl p-4">
                  <p className="text-[#8a6e3a] text-xs uppercase tracking-wider">
                    Payment Reference
                  </p>

                  <div className="flex items-center justify-between mt-1">
                    <p
                      className="
    text-[#c9a84c]
    font-mono
    font-bold
    text-xs
    sm:text-sm
    break-all
    leading-relaxed
  "
                    >
                      {data.ref}
                    </p>

                    <button
                      onClick={() => copyText(data.ref, "ref")}
                      className="flex items-center gap-1 text-xs bg-[#c9a84c]/10
              hover:bg-[#c9a84c]/20 text-[#c9a84c] px-3 py-2 rounded-lg"
                    >
                      {copied === "ref" ? (
                        <Check size={14} />
                      ) : (
                        <Copy size={14} />
                      )}

                      {copied === "ref" ? "Copied" : "Copy"}
                    </button>
                  </div>
                </div>

                {/* Accounts */}
                <div className="space-y-3">
                  {bankAccounts.map((account) => (
                    <div
                      key={account.bank}
                      className="bg-[#0d0904] border border-[#3d2b10] rounded-xl p-4"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                        <div className="flex gap-3">
                          <img
                            src={account.logo}
                            alt={account.bank}
                            className="w-11 h-11 rounded-xl object-cover bg-white"
                          />

                          <div>
                            <p className="text-[#fdf9ec] font-semibold text-sm">
                              {account.bank}
                            </p>

                            <p
                              className="
    text-[#c9a84c]
    font-bold
    text-base
    sm:text-lg
    tracking-wide
    font-mono
    break-all
  "
                            >
                              {account.accountNumber}
                            </p>

                            <p className="text-[#8a6e3a] text-xs">
                              {account.accountName}
                            </p>
                          </div>
                        </div>

                        <button
                          onClick={() =>
                            copyText(
                              account.accountNumber,
                              account.accountNumber,
                            )
                          }
                          className="
  flex items-center justify-center
  gap-1
  text-[11px]
  sm:text-xs
  whitespace-nowrap
  min-w-[84px]
  bg-[#c9a84c]/10
  hover:bg-[#c9a84c]/20
  text-[#c9a84c]
  px-3
  py-2
  rounded-lg
"
                        >
                          {copied === account.accountNumber ? (
                            <Check size={14} />
                          ) : (
                            <Copy size={14} />
                          )}

                          {copied === account.accountNumber ? "Copied" : "Copy"}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Notice */}
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-3">
                  <p className="text-amber-300 text-xs leading-relaxed">
                    Use your order reference as payment narration. After
                    payment, proceed to the counter for quick confirmation.
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}

        {/* Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {data.customerPhone && (
            <button
              onClick={handleWhatsApp}
              className="flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#20b858] 
                text-white font-semibold py-3 rounded-xl text-sm transition-all"
            >
              <MessageCircle size={16} />
              WhatsApp
            </button>
          )}
          <button
            onClick={handleDownload}
            disabled={!canvasDone}
            className="flex items-center justify-center gap-2 bg-[#1a1208] hover:bg-[#2a1e0a] 
              border border-[#3d2b10] text-[#c9a84c] font-semibold py-3 rounded-xl text-sm 
              transition-all disabled:opacity-50 col-span-1"
          >
            <Download size={16} />
            Save Image
          </button>
        </div>
        <div className="bg-[#0d0904] rounded-xl border border-[#3d2b10] p-3">
          <ol className="text-xs text-[#d6c7a6] space-y-2 list-decimal pl-4">
            <li>Copy the account number</li>
            <li>Transfer the exact amount</li>
            <li>Use your reference as narration</li>
            <li>Show payment confirmation at the counter</li>
          </ol>
        </div>

        <button
          onClick={() => router.push("/")}
          className="w-full text-[#8a6e3a] hover:text-[#c9a84c] text-sm py-2 transition-colors"
        >
          ← Order more
        </button>
      </div>
    </div>
  );
}

// Canvas helpers (duplicated on client side)
function dashed(
  ctx: CanvasRenderingContext2D,
  x1: number,
  y: number,
  x2: number,
  color: string,
) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.setLineDash([4, 4]);
  ctx.beginPath();
  ctx.moveTo(x1, y);
  ctx.lineTo(x2, y);
  ctx.stroke();
  ctx.restore();
}
function line(
  ctx: CanvasRenderingContext2D,
  x1: number,
  y: number,
  x2: number,
  color: string,
  w = 1,
) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = w;
  ctx.setLineDash([]);
  ctx.beginPath();
  ctx.moveTo(x1, y);
  ctx.lineTo(x2, y);
  ctx.stroke();
  ctx.restore();
}
function rrect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.arcTo(x + w, y, x + w, y + r, r);
  ctx.lineTo(x + w, y + h - r);
  ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
  ctx.lineTo(x + r, y + h);
  ctx.arcTo(x, y + h, x, y + h - r, r);
  ctx.lineTo(x, y + r);
  ctx.arcTo(x, y, x + r, y, r);
  ctx.closePath();
}

export default function ReceiptPage() {
  return (
    <Suspense>
      <ReceiptContent />
    </Suspense>
  );
}
