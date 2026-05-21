import fs from "node:fs/promises";

function write(path, data) {
  fs.writeFile(path, data, { flag: "w" });
}

export default write;
