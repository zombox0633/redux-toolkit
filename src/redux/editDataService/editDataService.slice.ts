import { createSlice } from "@reduxjs/toolkit";
import { editDataServiceThunk } from "./editDataService.thunk";
import { DataServiceStateType } from "../dataService.type";

const initialState: DataServiceStateType = {
  data: false,
  loading: false,
  error: null,
};

export const editDataServiceSlice = createSlice({
  name: "editDataService",
  initialState,
  reducers: {
    //
  },
  extraReducers: (builder) => {
    builder.addCase(editDataServiceThunk.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(editDataServiceThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload || true;
    });
    builder.addCase(editDataServiceThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default editDataServiceSlice;
