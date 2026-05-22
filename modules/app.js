import { fileURLToPath } from "url";
import * as path from "path";
import { multiplicacao } from "./mod.js";

console.log(multiplicacao(2, 2));

const __filename = path.resolve(fileURLToPath(import.meta.url));
const __dirname = path.dirname(__filename);

console.log(__filename, __dirname);

// const multiplicacao = require("./mod");
// console.log(multiplicacao(2, 2));
// console.log(__filename);
// console.log(__dirname);

// const path = require("path");
// console.log(path.resolve(__dirname));
