import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootType } from "../redux/store";
import { increment } from "../redux/starter/counterNumber";

function useCounterNumber() {
  const count = useSelector((state: RootType) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  const onClickIncrement = () => {
    dispatch(increment());
  };

  return {
    count,
    onClickIncrement,
  };
}

export default useCounterNumber;
