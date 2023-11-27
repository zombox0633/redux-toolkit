import { useEffect } from "react";
import Board from "./components/Board";
import MessageForm from "./components/MessageForm";
import useDataServiceAction from "./hook/useDataServiceAction";
import useGetDataService from "./hook/useGetDataService";

function App() {
  const { sortedData, loading, error, setFetchData } = useGetDataService();

  const {
    isEditId,
    displayMessageForm,
    onClickEdit,
    onClickDelete,
    handleBackground,
    handleSubmit,
    setDisplayMessageForm,
    setMessage,
  } = useDataServiceAction({ setFetchData });

  useEffect(() => {
    if (displayMessageForm) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [displayMessageForm]);

  return (
    <div>
      {displayMessageForm && (
        <div className="background" onClick={handleBackground} />
      )}
      {displayMessageForm && (
        <MessageForm
          isEditId={isEditId}
          handleSubmit={handleSubmit}
          setMessage={setMessage}
        />
      )}
      <div className="container__button_add">
        <button onClick={() => setDisplayMessageForm(true)}>add +</button>
      </div>
      <Board
        sortedData={sortedData}
        loading={loading}
        error={error}
        onClickEdit={onClickEdit}
        onClickDelete={onClickDelete}
      />
    </div>
  );
}

export default App;
