/** @format */

//Require axios to make API calls
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
import asyncHandler from "express-async-handler";

const accessKey = process.env.UNSPLASH_ACCESS_KEY;
const perPage = 10;
const orderBy = "popular";

//fix /user
export const getAllUser = asyncHandler(async (req, res) => {
  try {
    //fetching from the api
    const { data } = await axios.get("https://api.unsplash.com/photos/users", {
      params: {
        client_id: `${accessKey}`,
        per_page: `${perPage}`,
      },
    });

    const users = data.map((user) => ({
      id: user.id,
      username: user.username,
      description: user.description,
      raw: user.urls.raw,
    }));
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});

// Define route handler function
export const getUserPhotos = asyncHandler(async (req, res) => {
  try {
    const { username } = req.params;

    // Fetch photos from Unsplash API
    const { data } = await axios.get(
      `https://api.unsplash.com/users/${username}/photos`,
      {
        params: {
          client_id: `${accessKey}`,
          per_page: `${perPage}`,
        },
      }
    );

    // Map photo data
    const photos = data.map((photo) => ({
      id: photo.id,
      username: photo.user.username,
      description: photo.description || "No description provided.",
      url: photo.urls.raw,
    }));

    res.status(200).json(photos);
  } catch (error) {
    const { data } = error.response;
    res.status(error.response.status).json({ message: data.message });
  }
});

export const getPhotoRoutes = asyncHandler(async (req, res) => {
  try {
    //fetching from the api
    const { data } = await axios.get(
      `https://api.unsplash.com/photos?client_id=${accessKey}&per_page=${perPage}&order_by=${orderBy}`
    );

    console.log(data);
    const urlsAndIds = data.map((photo) => ({
      id: photo.id,
      raw: photo.urls.raw,
    }));
    res.status(200).json(urlsAndIds);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});

export const getPhotoByIdRoute = asyncHandler(async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.unsplash.com/photos/${req.params.id}?client_id=${accessKey}`
    );

    const data = response.data;

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});
