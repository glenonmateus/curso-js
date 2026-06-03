import "dotenv/config";
import ejs from "ejs";
import express from "express";
import mongoose from "mongoose";
import route from "./routes.js";
import { middlewareGlobal } from "./src/middlewares/middleware.js";
import session from "express-session";
import MongoStore from "connect-mongo";
import flash from "connect-flash";

mongoose
  .connect(process.env.DB_CONNECTION_STRING)
  .then(() => {
    app.emit("ready!");
    console.log("Database connected!");
  })
  .catch((err) => console.error(err));

const sessionOptions = session({
  secret: "asçldfajsçldfkjasçlkdfjaçlskjfçlaksjdfçlak",
  store: MongoStore.create({ client: mongoose.connection.getClient() }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: process.env.SESSION_MAX_AGE_IN_SECONDS,
    httpOnly: true,
  },
});

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./src/public"));
app.engine(".html", ejs.__express);
app.set("views", "./src/views");
app.set("view engine", "html");
//session
app.use(sessionOptions);
app.use(flash());
//middleware - routes
app.use(middlewareGlobal);
app.use(route);

app.on("ready!", () => {
  app.listen(3000, () => console.log("Server is running on port 3000"));
});
