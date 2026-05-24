// import { v2 as cloudinary } from "cloudinary";

// cloudinary.config({
//   cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET!,
// });

// export default cloudinary;

import { v2 as cloudinary } from "cloudinary";

const config = {
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
};

console.log("Cloudinary Config:", {
  // ← Temporary debug
  cloud_name: config.cloud_name,
  has_api_key: !!config.api_key,
  has_api_secret: !!config.api_secret,
});

cloudinary.config(config);

export default cloudinary;
