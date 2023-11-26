import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataService } from "../redux/getDataService/getDataService.thunk";
import { AppDispatch, RootType } from "../redux/store";

function useGetDataService() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootType) => state.getDataService
  );

  const [fetchData, setFetchData] = useState<number>(0);

  useEffect(() => {
    dispatch(fetchDataService());
  }, [dispatch, fetchData]);

  const sortedData = data
    ? [...data].sort(
        (a, b) =>
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      )
    : [];

  return {
    sortedData,
    loading,
    error,
    setFetchData,
  };
}

export default useGetDataService;
