import { DataServiceType } from "../api/DataService.type";

type BoardType = {
  sortedData: DataServiceType[] | null;
  loading: boolean;
  error: string | null;
  onClickEdit: (id: string) => void;
  onClickDelete: (id: string) => void
};

function Board({ sortedData, loading, error, onClickEdit,onClickDelete }: BoardType) {

  const renderData = () => {
    if (loading) return <div className="board_status"> Loading...</div>;
    if (error) return <div className="board_status"> Error: {error}</div>;
    if (!sortedData?.length) return <div className="board_status">No data available.</div>;

    return sortedData.map((item, index) => (
      <div key={item.id} className="item__container">
        <div className="message__container">
          <span>{index + 1}.</span>
          <p>{item.message}</p>
        </div>
        <div>
          <button onClick={() => onClickEdit(item.id)}>update</button>
          <button onClick={()=> onClickDelete(item.id)}>delete</button>
        </div>
      </div>
    ));
  };

  return (
    <div className="board__container">
      <div style={{ margin: "0.5rem 0rem 1.5rem" }}>
        <h1>Test Redux toolkit</h1>
      </div>
      {renderData()}
    </div>
  );
}

export default Board;
