import { readFile, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const root = process.cwd();

function fail(message) {
  console.error(`Build verification failed: ${message}`);
  process.exit(1);
}

function requireFile(relativePath) {
  const absolutePath = path.join(root, relativePath);
  if (!existsSync(absolutePath)) {
    fail(`missing ${relativePath}`);
  }
  return absolutePath;
}

function readJpegDimensions(buffer) {
  if (buffer.length < 4 || buffer[0] !== 0xff || buffer[1] !== 0xd8) {
    fail("out/profile.jpg is not a valid JPEG");
  }

  let offset = 2;
  while (offset + 9 < buffer.length) {
    if (buffer[offset] !== 0xff) {
      offset += 1;
      continue;
    }

    const marker = buffer[offset + 1];
    const standalone =
      marker === 0xd8 || marker === 0xd9 || marker === 0x01 ||
      (marker >= 0xd0 && marker <= 0xd7);

    if (standalone) {
      offset += 2;
      continue;
    }

    const length = buffer.readUInt16BE(offset + 2);
    if (length < 2 || offset + 2 + length > buffer.length) {
      fail("out/profile.jpg contains an invalid JPEG segment");
    }

    const isStartOfFrame =
      (marker >= 0xc0 && marker <= 0xc3) ||
      (marker >= 0xc5 && marker <= 0xc7) ||
      (marker >= 0xc9 && marker <= 0xcb) ||
      (marker >= 0xcd && marker <= 0xcf);

    if (isStartOfFrame) {
      return {
        height: buffer.readUInt16BE(offset + 5),
        width: buffer.readUInt16BE(offset + 7),
      };
    }

    offset += 2 + length;
  }

  fail("could not read JPEG dimensions from out/profile.jpg");
}

const indexPath = requireFile("out/index.html");
const robotsPath = requireFile("out/robots.txt");
const sitemapPath = requireFile("out/sitemap.xml");
const profilePath = requireFile("out/profile.jpg");

const [index, robots, sitemap, profile, profileStats] = await Promise.all([
  readFile(indexPath, "utf8"),
  readFile(robotsPath, "utf8"),
  readFile(sitemapPath, "utf8"),
  readFile(profilePath),
  stat(profilePath),
]);

if (!index.includes("Muhammad Saqib Rafique")) {
  fail("homepage does not contain the expected portfolio identity");
}

if (!index.includes("/profile.jpg")) {
  fail("homepage is not referencing /profile.jpg");
}

if (!robots.includes("sitemap")) {
  fail("robots.txt does not reference a sitemap");
}

if (!sitemap.includes("saqib-portfolio-87708.web.app")) {
  fail("sitemap.xml does not contain the production site URL");
}

if (profileStats.size < 50_000) {
  fail(`profile.jpg is unexpectedly small (${profileStats.size} bytes)`);
}

const { width, height } = readJpegDimensions(profile);
if (width < 600 || height < 600) {
  fail(`profile.jpg dimensions are too small (${width}x${height})`);
}

console.log("Static export verification passed.");
console.log(`Profile image: ${width}x${height}, ${profileStats.size} bytes`);
