import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../features/counter/newsSlice";

export const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});
