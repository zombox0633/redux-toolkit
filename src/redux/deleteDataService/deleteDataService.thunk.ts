import { createAsyncThunk } from "@reduxjs/toolkit";
import { CheckErrorMessage } from "../../service/Service";
import { deleteDataService } from "../../api/DataService";

export const deleteDataServiceThunk = createAsyncThunk(
  "deleteDataServiceSlice",
  async (id: string, { rejectWithValue }) => {
    try {
      const [success, error] = await deleteDataService(id);
      if (success) {
        return success;
      } else {
        rejectWithValue(error);
      }
    } catch (error) {
      rejectWithValue(CheckErrorMessage(error));
    }
  }
);
