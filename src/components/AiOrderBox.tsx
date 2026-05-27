"use client";

import { AIOrderDraft } from "@/types/order";
import { useState } from "react";

type Props = {
  onResult: (draft: AIOrderDraft) => void;
};

export default function AiOrderBox({ onResult }: Props) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleParse() {
    if (!input.trim()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/ai/order-parser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      if (data?.success) {
        onResult(data.draft);
      }
    } catch (err) {
      console.error("AI parse error:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto bg-white border rounded-2xl p-4 shadow-sm">
      <h3 className="font-bold text-lg mb-2">🤖 AI Order Assistant</h3>

      <p className="text-sm text-gray-500 mb-3">
        Example: "Rice for 120 people, birthday party in Ikeja"
      </p>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Describe your event..."
        className="w-full border rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-200"
        rows={3}
      />

      <button
        onClick={handleParse}
        disabled={loading}
        className="mt-3 w-full bg-green-500 text-white py-2.5 rounded-xl font-semibold disabled:opacity-50"
      >
        {loading ? "Thinking..." : "Generate Order ✨"}
      </button>
    </div>
  );
}
