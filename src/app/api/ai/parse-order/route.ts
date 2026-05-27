import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { text } = await req.json();

  const prompt = `
You are a catering order assistant.

Convert user text into structured JSON.

Rules:
- Always estimate guestCount if unclear
- If food is mentioned (rice, jollof, etc), map to menuItems
- Infer event type (birthday, wedding, corporate, general)
- Extract location if present (LGA in Nigeria if possible)
- If unclear, still return best guess
- Output ONLY valid JSON

User input:
"""${text}"""
`;

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.2,
    }),
  });

  const data = await res.json();

  const content = data.choices[0].message.content;

  try {
    return NextResponse.json({
      success: true,
      data: JSON.parse(content),
    });
  } catch {
    return NextResponse.json({
      success: false,
      error: "Invalid AI response",
    });
  }
}
