import { createAsyncThunk } from "@reduxjs/toolkit";
import { addDataService } from "../../api/DataService";
import { CheckErrorMessage } from "../../service/Service";

export const addDataServiceThunk = createAsyncThunk(
  "addDataServiceSlice/addDataServiceThunk",
  async (messageText: string, { rejectWithValue }) => {
    try {
      const [success, error] = await addDataService(messageText);
      if (success) {
        return success;
      } else {
        rejectWithValue(error);
      }
    } catch (error) {
      return rejectWithValue(CheckErrorMessage(error));
    }
  }
);
