import { createSlice } from "@reduxjs/toolkit";
import * as FileSystem from "expo-file-system";
import Place from "../model/place"

const initialState = {
  places: [],
};

const placeSlice = createSlice({
  name: "place",
  initialState,
  reducers: {
    addPlace: (state, action) => {
      const newPlace = new Place(Date.now(), action.payload.title, action.payload.image, action.payload.address);
      state.places.push(newPlace);
    },
  },
});
export const {addPlace} = placeSlice.actions;
export const savePlace = (title, image, address) => {
  return async (dispatch) => {
    /* const fileName = image.split("/").pop();
    const Path = FileSystem.documentDirectory + fileName; */
    try {
      /* await FileSystem.moveAsync({
        from: image,
        to: Path,
      }); */
      dispatch(addPlace({ title, image, address}));
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  };
};
export default placeSlice.reducer;
