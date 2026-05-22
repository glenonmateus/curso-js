import { fileURLToPath } from "url";
import fs from "node:fs/promises";
import * as path from "path";

async function readdir(
  rootDir = path.dirname(path.resolve(fileURLToPath(import.meta.url))),
) {
  const files = await fs.readdir(rootDir);
  walk(files, rootDir);
}

async function walk(files, rootDir) {
  for (let file of files) {
    const fullFilePath = path.resolve(rootDir, file);
    const stats = await fs.stat(fullFilePath);
    if (/(\.git|node_modules)/g.test(fullFilePath)) continue;
    if (stats.isDirectory()) {
      readdir(fullFilePath);
      continue;
    }
    console.log(fullFilePath);
  }
}

readdir("../");
