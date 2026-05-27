import { AIOrderDraft, FormState } from "@/types/order";

export function mapAIToForm(draft: AIOrderDraft): Partial<FormState> {
  return {
    eventType:
      draft.eventType === "BIRTHDAY" ||
      draft.eventType === "WEDDING" ||
      draft.eventType === "CORPORATE"
        ? draft.eventType
        : "",

    guestCount: String(draft.guestCount || ""),
    venueLGA: draft.venueLGA || "",
    // serviceType: draft.serviceType || "",
    specialRequests: draft.notes || "",
  };
}
