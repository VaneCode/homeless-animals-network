// Import
/* import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    animals : [],
    status: "idle"
};

// Action names
const FETCHED_ANIMALS = "/homeless-animals-network//animals/FETCHED_ANIMALS";

export const FetchedAnimals = createAsyncThunk(FETCHED_ANIMALS, async () => {
  const response = await.axios.get();
}

export const FetchedRockets = createAsyncThunk(FETCHED_ROCKETS, async () => {
    try {
      const response = await axios.get('https://api.spacexdata.com/v3/rockets');
      const payload = response.data.map((rocket) => {
        const {
          id, rocket_name, description, flickr_images,
        } = rocket;
        return {
          id,
          rocket_name,
          description,
          flickr_images,
          reserved: false,
        };
      });
      // const payload = response.data;
      return payload;
    } catch (err) {
      return err.message;
    }
  }); */
