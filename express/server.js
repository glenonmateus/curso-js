import express from "express";
import route from "./routes.js";
import ejs from "ejs";

const app = express();

// CRUD -> CREATE READ UPDATE DELETE
// HTTP -> POST   GET  PUT    DELETE
// /profiles/1?query=value&query=value

app.use(express.urlencoded({ extended: true }));
app.use(route);

app.engine(".html", ejs.__express);
app.set("views", "./src/views");
app.set("view engine", "html");

app.listen(3000, () => console.log("Server is running on port 3000"));
