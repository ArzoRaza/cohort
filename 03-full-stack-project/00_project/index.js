import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./utils/db.js";

// Import all Routes
import userRoutes from "./routes/user.routes.js"

dotenv.config();

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Start Engine")
});

app.get("/akbar", (req, res) => {
    res.send("Akbar raute!")
  });

app.get("/arzo", (req, res) => {
    res.send("Arzo raute!");
})

// connect to db
db();

// user routes
app.use("/api/v1/users/", userRoutes)

app.use(
    cors({
        origin: process.env.BASE_URL,
        credentials: true,
        methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization']
    })
);
app.use(express.json());
app.use(express.urlencoded({extended:true}));

console.log(process.env.PORT || 4000);



app.listen(port, () => {
  console.log(`Arzo Project start on port ${port}`)
})