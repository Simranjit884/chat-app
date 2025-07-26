import express from "express";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { app, server } from "./lib/socket.js";

dotenv.config();

const PORT = process.env.PORT;
const __dirname = path.resolve();

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

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

server.listen(PORT, () => {
  console.log("server is running on port:" + PORT);
  connectDB();
});
