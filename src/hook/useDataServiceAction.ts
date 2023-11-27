import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { addDataServiceThunk } from "../redux/addDataService/addDataService.thunk";
import { deleteDataServiceThunk } from "../redux/deleteDataService/deleteDataService.thunk";
import { editDataServiceThunk } from "../redux/editDataService/editDataService.thunk";

type UseDataServiceActionType = {
  setFetchData: React.Dispatch<React.SetStateAction<number>>;
};

function useDataServiceAction({ setFetchData }: UseDataServiceActionType) {
  const dispatch = useDispatch<AppDispatch>();

  const [message, setMessage] = useState<string | null>(null);
  const [editId, setEditId] = useState<string | null>(null);
  const [displayMessageForm, setDisplayMessageForm] = useState<boolean>(false);

  const isEditId = !!editId;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const confirmMessage = isEditId
      ? "Are you sure you want to update this message?"
      : "Are you sure you want to add this message?";

    if (message) {
      const confirm = window.confirm(confirmMessage);
      if (confirm) {
        if (isEditId) {
          dispatch(editDataServiceThunk({ id: editId, messageText: message }));
        } else {
          dispatch(addDataServiceThunk(message));
        }
        setFetchData((prev) => prev + 1);
        reset();
      }
    }
  };

  const reset = () => {
    setEditId(null);
    setMessage(null);
    setDisplayMessageForm(false);
  };

  const onClickEdit = (id: string) => {
    setDisplayMessageForm(true);
    setEditId(id);
  };

  const onClickDelete = (id: string) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this message?"
    );
    if (confirm) {
      dispatch(deleteDataServiceThunk(id));
      setFetchData((prev) => prev + 1);
    }
  };

  const handleBackground = () => {
    setDisplayMessageForm(false);
    setEditId(null);
  };

  return {
    isEditId,
    displayMessageForm,
    onClickEdit,
    onClickDelete,
    handleBackground,
    handleSubmit,
    setDisplayMessageForm,
    setMessage,
  };
}

export default useDataServiceAction;
