import { useState } from "react";
import "./style.css";

export default function App() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  const [initialState, setNewState] = useState("placeholder text");
  return (
    <>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            Item 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Item 2
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  );
}
