// src/lib/pricing/eventPricing.ts

export type EventMenuSelectionInput = {
  menuItemId: string;
  quantity: number;
  unitPrice: number;
};

export function calculateEventTotals(params: {
  selections: EventMenuSelectionInput[];
  guestCount: number;
  serviceBasePerHead?: number;
  serviceFee?: number;
  transportFee?: number;
}) {
  const {
    selections,
    guestCount,
    serviceBasePerHead = 0,
    serviceFee = 0,
    transportFee = 0,
  } = params;

  // 🍛 MENU TOTAL
  const menuTotal = selections.reduce((sum, item) => {
    return sum + item.quantity * item.unitPrice;
  }, 0);

  // 👨‍🍳 SERVICE BASE (per head pricing if applicable)
  const serviceBase = serviceBasePerHead * guestCount;

  // 🚚 EXTRA FEES
  const extras = serviceFee + transportFee;

  // 💰 GRAND TOTAL
  const grandTotal = menuTotal + serviceBase + extras;

  return {
    menuTotal,
    serviceBase,
    serviceFee,
    transportFee,
    grandTotal,
  };
}
