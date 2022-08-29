import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import videosService from './videos-services';

export const getVideosFromAPI = createAsyncThunk(
  'videos/getVideos',
  async (category) => {
    return await videosService.getVideos(category);
  }
);

const initialState = {
  videos: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const videosSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    reset(state) {
      state.videos = [];
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
    },
  },
  extraReducers: {
    [getVideosFromAPI.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getVideosFromAPI.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.videos = action.payload;
    },
    [getVideosFromAPI.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const { reset } = videosSlice.actions;
export default videosSlice.reducer;
