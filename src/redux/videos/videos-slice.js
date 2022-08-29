import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import videosService from './videos-services';

export const getVideosFromAPI = createAsyncThunk(
  'videos/getVideos',
  async (category) => {
    return await videosService.getVideos(category);
  }
);

export const getVideoFromAPI = createAsyncThunk(
  'videos/getVideo',
  async (id) => {
    return await videosService.getVideo(id);
  }
);

export const getChannelFromAPI = createAsyncThunk(
  'videos/getChannel',
  async (id) => {
    return await videosService.getChannel(id);
  }
);

const initialState = {
  videos: [],
  channel: {},
  video: {},
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
    [getChannelFromAPI.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getChannelFromAPI.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.channel = action.payload;
    },
    [getChannelFromAPI.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
    },
    [getVideoFromAPI.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getVideoFromAPI.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.video = action.payload;
    },
    [getVideoFromAPI.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const { reset } = videosSlice.actions;
export default videosSlice.reducer;
