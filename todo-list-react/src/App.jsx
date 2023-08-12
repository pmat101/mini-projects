import "./style.css";
import NewToDoForm from "./components/newToDoForm";
import ToDoList from "./components/todoList";

export default function App() {
  return (
    <>
      <NewToDoForm />
      <h1 className="header">Todo List</h1>
      <ToDoList />
    </>
  );
}
