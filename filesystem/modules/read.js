import fs from "node:fs/promises";

async function read(file) {
  try {
    const data = await fs.readFile(file, "utf8");
    rendered(data);
  } catch (err) {
    console.error(err);
  }
}

function rendered(data) {
  const json = JSON.parse(data);
  json.forEach((item) => {
    console.log(item);
  });
}

export default read;
