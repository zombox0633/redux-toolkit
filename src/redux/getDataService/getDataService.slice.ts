import { createSlice } from "@reduxjs/toolkit";
import { GetDataServiceStateType } from "./getDataService.type";
import { fetchDataService } from "./getDataService.thunk";

const initialState: GetDataServiceStateType = {
  data: null,
  loading: false,
  error: null,
};

const getDataServiceSlice = createSlice({
  name: "getDataService",
  initialState,
  reducers: {
    // synchronous reducers
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDataService.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchDataService.fulfilled, (state, action) => {
      state.data = action.payload || null;
      state.loading = false;
    });
    builder.addCase(fetchDataService.rejected, (state, action) => {
      state.error = action.payload as string;
      state.loading = false;
    });
  },
});

export default getDataServiceSlice;
