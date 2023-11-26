import { configureStore } from "@reduxjs/toolkit";
import counterNumber from "./starter/counterNumber";
import getDataServiceSlice from "./getDataService/getDataService.slice";

export const store = configureStore({
  reducer:{
    counter: counterNumber,
    getDataService: getDataServiceSlice.reducer
  }
});

export type RootType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
