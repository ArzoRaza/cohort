import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import database from "./utils/db.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.BASE_URL, // only allow this frondend
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"], // these request allowed
    allowedHeaders: ["Content-Type", "Authorization", "X-Custom-Header"], //only these thing allow
  })
);

app.use(express.json());  // eccept json data
app.use(express.urlencoded({ extended: true })); // url encoding

const port = process.env.PORT || 4000; // port allocated by server or running on 4000 PORT

app.get("/", (req, res) => {
  res.send("First Cohort!");
});

app.get("/arzo", (req, res) => {
  res.send("Hello, this page dedicated for Arzo");
});

app.get("/akbar", function (r, s) {
  s.send("Now it's page dedicated for Akbar");
});

// connect to database
database()

app.listen(process.env.PORT, () => {
  console.log(`App listening/Running on port ${port}`);
});
