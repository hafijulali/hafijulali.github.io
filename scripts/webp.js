import sharp from "sharp";
import { globby } from "globby";
import fs from "fs-extra";


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

      // Project cards never need the full-resolution screenshot on phones.
      if (["open-contacts.png", "godevops.png", "apps.png"].some((name) => file.endsWith(`/${name}`))) {
        for (const width of [480, 800]) {
          await sharp(file)
            .resize({ width, withoutEnlargement: true })
            .webp({ quality: 75 })
            .toFile(webpPath.replace(".webp", `-${width}.webp`));
        }
      }
    }),
  );

  console.log("✅ All images converted to WebP.");
};

convertToWebP();
