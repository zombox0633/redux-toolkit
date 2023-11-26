import { useState } from "react";

type UseDataServiceActionType = {
  setFetchData: React.Dispatch<React.SetStateAction<number>>;
};

function useDataServiceAction({ setFetchData }: UseDataServiceActionType) {
  const [message, setMessage] = useState<string | null>(null);
  const [editId, setEditId] = useState<string | null>(null);
  const [displayMessageForm, setDisplayMessageForm] = useState<boolean>(false);

  const isEditId = !!editId;

  const onClickEdit = (id: string) => {
    setDisplayMessageForm(true);
    setEditId(id);
  };

  const handleBackground = () => {
    setDisplayMessageForm(false);
    setEditId(null);
  };

  return {
    isEditId,
    displayMessageForm,
    onClickEdit,
    handleBackground,
    setDisplayMessageForm,
    setMessage
  };
}

export default useDataServiceAction;
