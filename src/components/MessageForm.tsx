type MessageFormType = {
  isEditId: boolean;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  setMessage: React.Dispatch<React.SetStateAction<string | null>>;
};

function MessageForm({ isEditId, handleSubmit, setMessage }: MessageFormType) {
  return (
    <form className="message__form" onSubmit={handleSubmit}>
      <div style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ margin: "1rem 0" }}>{`${
          isEditId ? "Edit" : "Add"
        } Message`}</h2>
        <p>
          Please enter your message below. Messages should be concise and clear.
        </p>
      </div>
      <label htmlFor="messageInput">
        <input
          id="messageInput"
          type="text"
          placeholder="Type your message here..."
          onChange={(e) => setMessage(e.target.value)}
          required
          className="message__input"
        />
      </label>
      <button type="submit">{isEditId ? "edit" : "add"}</button>
    </form>
  );
}

export default MessageForm;
