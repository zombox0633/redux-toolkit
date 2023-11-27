import { configureStore } from "@reduxjs/toolkit";
import counterNumber from "./starter/counterNumber";
import getDataServiceSlice from "./getDataService/getDataService.slice";
import { addDataServiceSlice } from "./addDataService/addDataService.slice";
import deleteDataServiceSlice from "./deleteDataService/deleteDataService.slice";
import editDataServiceSlice from "./editDataService/editDataService.slice";

export const store = configureStore({
  reducer: {
    counter: counterNumber,
    getDataService: getDataServiceSlice.reducer,
    addDataService: addDataServiceSlice.reducer,
    editDataService: editDataServiceSlice.reducer,
    deleteDataService: deleteDataServiceSlice.reducer,
  },
});

export type RootType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
