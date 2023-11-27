import { createAsyncThunk } from "@reduxjs/toolkit";
import { UpdateDataServiceType } from "../../api/DataService.type";
import { CheckErrorMessage } from "../../service/Service";
import { updateDataService } from "../../api/DataService";

export const editDataServiceThunk = createAsyncThunk(
  "editDataServiceSlice/editDataServiceThunk",
  async ({ id, messageText }: UpdateDataServiceType, { rejectWithValue }) => {
    try {
      const [success, error] = await updateDataService({ id, messageText });
      if (success) {
        return success;
      } else {
        return rejectWithValue(error);
      }
    } catch (error) {
      return rejectWithValue(CheckErrorMessage(error));
    }
  }
);
