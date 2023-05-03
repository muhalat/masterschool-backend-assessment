/** @format */

import express from "express";
const router = express.Router();
import {
  getPhotoRoutes,
  getPhotoByIdRoute,
  getUserPhotos,
  getAllUser,
} from "../controllers/photoController.js";

router.route("/").get(getPhotoRoutes);
router.route("/:id").get(getPhotoByIdRoute);
router.route("/user/:username").get(getUserPhotos);
router.route("/user").get(getAllUser);

export default router;
