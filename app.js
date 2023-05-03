/** @format */

import express from "express";
import dotenv from "dotenv";
dotenv.config();
import photoRoutes from "./routes/photoRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import favoritesRoutes from "./routes/favoritesRoutes.js";
import connectDB from "./config/db.js";
import { errorHandler } from "./middleware/errorMiddleware.js";
const port = process.env.PORT || 4000;
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the Unsplash API!" });
});

app.use("/api/photos", photoRoutes);
app.use("/api/users", userRoutes);
app.use("/api/favoritephoto", favoritesRoutes);
app.use(errorHandler);
app.listen(port, () => console.log(` listening on port ${port}`));