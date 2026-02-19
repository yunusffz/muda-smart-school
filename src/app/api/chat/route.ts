import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import { z } from "zod";
import { SYSTEM_PROMPT } from "@/src/lib/school-info";

const chatSchema = z.object({
  message: z.string({ message: "Pesan wajib diisi" }).min(1).max(500),
  history: z
    .array(
      z.object({
        role: z.enum(["user", "model"]),
        parts: z.array(z.object({ text: z.string() })),
      }),
    )
    .optional()
    .default([]),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { message, history } = chatSchema.parse(body);

    const apiKey = process.env.GEMINI_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Konfigurasi AI tidak tersedia" },
        { status: 500 },
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: SYSTEM_PROMPT,
    });

    const chat = model.startChat({
      history,
      generationConfig: {
        maxOutputTokens: 512,
        temperature: 0.4,
      },
    });

    const result = await chat.sendMessage(message);
    const text = result.response.text();

    return NextResponse.json({ reply: text });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Pesan tidak valid" }, { status: 400 });
    }
    console.error("[chat/route] Error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan, coba lagi nanti" },
      { status: 500 },
    );
  }
}
