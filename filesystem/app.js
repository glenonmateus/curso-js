import { fileURLToPath } from "node:url";
import * as path from "node:path";
import write from "./modules/write.js";
import read from "./modules/read.js";

const currentFilePath = path.dirname(
  path.resolve(fileURLToPath(import.meta.url)),
);
const createdFilePath = `${currentFilePath}/test.json`;

// const pessoas = [
//   { nome: "Maria" },
//   { nome: "João" },
//   { nome: "Nayra" },
//   { nome: "Brenda" },
// ];
// const json = JSON.stringify(pessoas, "", 2);
//
// write(createdFilePath, json);

// async function readFile(filePath) {
//   const data = await read(filePath);
//   return data.then((data) => data).catch((e) => e);
// }
//
// const data = readFile(createdFilePath);
// console.log(data);

read(createdFilePath);
