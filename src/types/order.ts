import { EventType, ServiceType, VenueType } from "@/generated/prisma";

export type FormState = {
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  clientWhatsApp: string;
  eventType: EventType | "";
  eventDate: string;
  eventTime: string;
  guestCount: string;
  venueType: VenueType | "";
  venueLGA: string;
  venueAddress: string;
  landmark: string;
  serviceType: ServiceType | "";
  specialRequests: string;
};

export type AIOrderDraft = {
  eventType?: "BIRTHDAY" | "WEDDING" | "CORPORATE";
  guestCount: number;
  venueLGA?: string;
  serviceType?: "FULL_SERVICE" | "DROP_OFF";

  menuItems: {
    name: string;
    quantity: number;
    category?: string;
  }[];

  confidence: number;

  notes?: string;
};
