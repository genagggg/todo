import "./App.css";
import { ToDo_3 } from "./components/ToDo_3/ToDo_3";
import { TodoApp } from "./components/TodoApp/TodoApp";
import { WorkTodo } from "./components/WorkTodo/WorkTodo";

function App() {

  return (
    <div className="app">
   <TodoApp />
   <ToDo_3 />
    </div>
  );
}

export default App;
