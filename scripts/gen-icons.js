const sharp = require("sharp");
const path = require("path");

const src = path.join(__dirname, "../public/icon.svg");

async function generate() {
  await sharp(src).resize(192, 192).png().toFile(path.join(__dirname, "../public/icon-192.png"));
  await sharp(src).resize(512, 512).png().toFile(path.join(__dirname, "../public/icon-512.png"));
  console.log("✅ icon-192.png, icon-512.png 생성 완료");
}

generate();
