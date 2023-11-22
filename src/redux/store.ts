import { configureStore } from "@reduxjs/toolkit";
import counterNumber from "./starter/counterNumber";

export const store = configureStore({
  reducer:{
    counter: counterNumber
  }
});

export type RootType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
