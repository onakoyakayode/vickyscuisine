import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

export async function POST(req: Request) {
  try {
    console.log("🚀 Upload API called");

    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    console.log("📤 Starting Cloudinary upload...");

    const result = await new Promise<any>((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: "vickys-cuisine",
            resource_type: "auto",
          },
          (error, result) => {
            if (error) {
              console.error("❌ Cloudinary Error:", error);
              reject(error);
            } else {
              console.log("✅ Cloudinary Success:", result?.public_id);
              resolve(result);
            }
          },
        )
        .end(buffer);
    });

    return NextResponse.json({
      success: true,
      url: result.secure_url,
      public_id: result.public_id,
    });
  } catch (err: any) {
    console.error("💥 Upload Route Error:", err);
    return NextResponse.json(
      { error: err.message || "Upload failed" },
      { status: 500 },
    );
  }
}
