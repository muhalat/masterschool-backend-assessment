/** @format */

import express from "express";
const router = express.Router();
import {
  registerUser,
  loginUser,
  getme,
} from "../controllers/userController.js";

import { protect } from "../middleware/authMiddleware.js";

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getme);

export default router;
