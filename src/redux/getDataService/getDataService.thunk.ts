import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDataService } from "../../api/DataService";
import { CheckErrorMessage } from "../../service/Service";

export const fetchDataService = createAsyncThunk(
  "getDataServiceSlice/fetchDataService",
  async (_, { rejectWithValue }) => {
    try {
      const [data, error] = await getDataService();
      if (data) {
        return data;
      } else if (error) {
        console.error(error);
        return rejectWithValue(error);
      }
    } catch (error) {
      return rejectWithValue(CheckErrorMessage(error));
    }
  }
);

export default fetchDataService;
