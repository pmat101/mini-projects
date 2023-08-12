import { useState } from "react";

export default function NewToDoForm() {
  function handleSubmit(event) {
    event.preventDefault();
  }
  const [initialState, setNewState] = useState("placeholder text");

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item"></label>
        <input
          value={initialState}
          onInput={(e) => setNewState(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
