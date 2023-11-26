import { DataServiceType } from "../../api/DataService.type";

export type GetDataServiceStateType = {
  data: DataServiceType[] | null;
  loading: boolean;
  error: string | null;
};
