// scripts/sync-homepage.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// ES Modules tidak punya __dirname, jadi buat manual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envPath = path.resolve(__dirname, "../.env");
const packageJsonPath = path.resolve(__dirname, "../package.json");

// Baca file .env
const envContent = fs.readFileSync(envPath, "utf8");
const match = envContent.match(/^VITE_REACT_APP_HOMEPAGE=(.*)$/m);

if (match) {
  const homepage = match[1].trim();
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

  // Update package.json
  packageJson.homepage = homepage;

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  console.log(`✅ package.json.homepage berhasil di-set ke: ${homepage}`);
} else {
  console.error("❌ Tidak menemukan VITE_REACT_APP_HOMEPAGE di file .env");
  process.exit(1);
}
