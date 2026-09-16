import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRequirements = createAsyncThunk(
  'visa/fetchRequirements',
  async ({ nationality, destination }) => {
    const response = await axios.get(`http://localhost:5000/api/requirements?nationality=${nationality}&destination=${destination}`);
    return response.data;
  }
);

const initialState = {
  requirements: null,
  globalRules: null,
  destination: null,
  nationality: null,
  status: 'idle',
  error: null,
  bookmarks: JSON.parse(localStorage.getItem('visaBookmarks')) || [],
};

const visaSlice = createSlice({
  name: 'visa',
  initialState,
  reducers: {
    addBookmark: (state, action) => {
      const exists = state.bookmarks.find(b => b.destination === action.payload.destination && b.nationality === action.payload.nationality);
      if (!exists) {
        state.bookmarks.push(action.payload);
        localStorage.setItem('visaBookmarks', JSON.stringify(state.bookmarks));
      }
    },
    removeBookmark: (state, action) => {
      state.bookmarks = state.bookmarks.filter(
        b => !(b.destination === action.payload.destination && b.nationality === action.payload.nationality)
      );
      localStorage.setItem('visaBookmarks', JSON.stringify(state.bookmarks));
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRequirements.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRequirements.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.requirements = action.payload.requirements;
        state.globalRules = action.payload.globalRules;
        state.destination = action.payload.destination;
        state.nationality = action.meta.arg.nationality;
        state.error = null;
      })
      .addCase(fetchRequirements.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addBookmark, removeBookmark } = visaSlice.actions;

export default visaSlice.reducer;
