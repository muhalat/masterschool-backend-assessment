/** @format */

import mongoose from "mongoose";

const { Schema } = mongoose;

const favoritePhotoSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
});

const FavoritePhoto = mongoose.model("FavoritePhoto", favoritePhotoSchema);

export default FavoritePhoto;
