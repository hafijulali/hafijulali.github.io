import sharp from "sharp";
import { globby } from "globby";
import fs from "fs-extra";
import path from "path";

const SOURCE_DIR = "public/assets";
const IMAGE_GLOB = `${SOURCE_DIR}/**/*.{png,jpg,jpeg}`;

const convertToWebP = async () => {
  const files = await globby(IMAGE_GLOB);

  if (files.length === 0) {
    console.log("✅ No images to convert.");
    return;
  }

  console.log(`Converting ${files.length} images to WebP...`);

  await Promise.all(
    files.map(async (file) => {
      const webpPath = file.replace(/\.(png|jpe?g)$/, ".webp");
      const buffer = await sharp(file).webp({ quality: 75 }).toBuffer();

      await fs.writeFile(webpPath, buffer);
    }),
  );

  console.log("✅ All images converted to WebP.");
};

convertToWebP();
