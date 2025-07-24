import express from "express";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // for
const app = express();

const PORT = process.env.PORT;

app.use(express.json()); // for parsing JSON data from req.body into object.
app.use(cookieParser()); // Parses cookies from incoming requests and puts them into req.cookies
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // Allows cookies or auth headers to be sent/received
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(PORT, () => {
  console.log("server is running on port:" + PORT);
  connectDB();
});
