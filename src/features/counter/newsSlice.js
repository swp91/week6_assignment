import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  Loading: false,
  news: [],
  displayCount: 0,
  keyword: "korea",
};

export const loadnews = createAsyncThunk(
  "default/news",
  async (params = {}) => {
    const keyword = params.keyword || "korea";
    const startDate = params.startDate || "";
    const endDate = params.endDate || "";

    const url = `https://newsapi.org/v2/everything?q=${keyword}${
      startDate ? `&from=${startDate}` : ""
    }${
      endDate ? `&to=${endDate}` : ""
    }&apiKey=bfe7b357def14a7685f13fd1ef059df2`;

    const response = await axios.get(url);

    return response.data;
  }
);

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    increaseDisplayCount: (state) => {
      state.displayCount += 5;
    },
    initDisplatCount: (state) => {
      state.displayCount = 5;
    },
    keywordChange: (state, action) => {
      state.keyword = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadnews.pending, (state, action) => {
        state.Loading = true;
        console.log("어흥");
      })
      .addCase(loadnews.fulfilled, (state, action) => {
        state.Loading = false;

        state.news = action.payload.articles;
      })
      .addCase(loadnews.rejected, (state, action) => {
        state.Loading = false;
      });
  },
});

export const { increaseDisplayCount, initDisplatCount, keywordChange } =
  newsSlice.actions;

export default newsSlice.reducer;
