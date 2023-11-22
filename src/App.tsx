import useCounterNumber from "./hook/useCounterNumber";

function App() {
  const { count, onClickIncrement } = useCounterNumber();
  return (
    <div>
      <div onClick={onClickIncrement} className="container__button_add">
        <button>add +</button>
      </div>
      <div className="board__container">
        <h1>Test Redux toolkit</h1>
        <p>{count}</p>
      </div>
    </div>
  );
}

export default App;
