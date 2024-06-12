import express, { Application } from "express";
import cors from "cors";

const app: Application = express();

const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to Car Wash Booking System");
});

export default app;
