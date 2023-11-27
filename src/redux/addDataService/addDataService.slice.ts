import { createSlice } from "@reduxjs/toolkit";
import { DataServiceStateType } from "../dataService.type";
import { addDataServiceThunk } from "./addDataService.thunk";

const initialState: DataServiceStateType = {
  data: false,
  loading: false,
  error: null,
};

export const addDataServiceSlice = createSlice({
  name: "addDataService",
  initialState,
  reducers: {
    //
  },
  extraReducers: (builder) => {
    builder.addCase(addDataServiceThunk.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addDataServiceThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload || true;
    });
    builder.addCase(addDataServiceThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default addDataServiceSlice;
