import { configureStore } from '@reduxjs/toolkit';
import goldSlice from "../features/gold/goldSlice";

export const store = configureStore({
  reducer: {
    image: goldSlice
  },
});
