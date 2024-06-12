import express, { Application } from "express";
import cors from "cors";
import router from "./app/Routes";
import globalErrorHandaler from "./app/middleware/globalErrorHandler";
import notFound from "./app/middleware/notFound";
// import cookieParser from "cookie-parser";

const app: Application = express();

app.use(express.json());
// app.use(cookieParser());
app.use(cors());

app.use("/api/", router);

app.get("/", (req, res) => {
  res.send("Welcome to Car Wash Booking System");
});

app.use(globalErrorHandaler);

// Not Found
app.use(notFound);

export default app;
