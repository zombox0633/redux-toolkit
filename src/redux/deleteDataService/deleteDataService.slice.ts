import { createSlice } from "@reduxjs/toolkit";
import { DataServiceStateType } from "../dataService.type";
import { deleteDataServiceThunk } from "./deleteDataService.thunk";

const initialState: DataServiceStateType = {
  data: false,
  loading: false,
  error: null,
};

export const deleteDataServiceSlice = createSlice({
  name: "deleteDataService",
  initialState,
  reducers: {
    //
  },
  extraReducers: (builder) => {
    builder.addCase(deleteDataServiceThunk.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteDataServiceThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload || true;
    });
    builder.addCase(deleteDataServiceThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default deleteDataServiceSlice;
