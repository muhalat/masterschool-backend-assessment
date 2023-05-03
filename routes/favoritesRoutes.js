/** @format */

import express from "express";
const router = express.Router();
import {
  getFavoritePhoto,
  addFavoritePhoto,
  editFavoritePhoto,
  deleteFavoritePhoto,
} from "../controllers/favoritesController.js";
import { protect } from "../middleware/authMiddleware.js";

router
  .route("/")
  .get(protect, getFavoritePhoto)
  .post(protect, addFavoritePhoto);

router
  .route("/:id")
  .delete(protect, deleteFavoritePhoto)
  .patch(protect, editFavoritePhoto);

export default router;
