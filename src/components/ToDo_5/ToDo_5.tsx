import { useState } from "react";

interface ToDo {
  id: number;
  text: string;
  completed: boolean;
}

type FilterType = "all" | "active" | "completed";

export const ToDo_5 = () => {
  const [todos, setTodo] = useState<ToDo[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [filter, setFilter] = useState<FilterType>("all")

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodo([
        ...todos,
        {
          id: Date.now(),
          text: inputValue,
          completed: false,
        },
      ]);
      setInputValue("");
    }
  };
  const deleteToDo=(id:number)=>{
    setTodo(todos.filter(todo=>todo.id !== id))
  }
  const toggleTodo = (id: number) => {
    setTodo(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodo = todos.filter((todo)=>{
    if(filter === "active") return !todo.completed
    if(filter === "completed") return todo.completed
    return true
  })

  const activeTodoCount = todos.filter(todo=>!todo.completed).length



  return (
    <>
      <div className="todo_container">
        <h3>Todo</h3>
       <div className="active_todo">{activeTodoCount}</div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Введите задачу"
        />
        <button onClick={addTodo}>Save</button>
       <div className="filter">
        <button className={filter === "all"? "active": ""} onClick={()=>setFilter("all")}>ALL</button>
        <button className={filter === "active"?"active": ""} onClick={()=>setFilter("active")}>Active</button>
        <button className={filter === "completed"?"active": ""} onClick={()=>setFilter("completed")}>Completed</button>
       </div>
        <ul>
          {filteredTodo.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              {todo.text}
              <button onClick={()=>deleteToDo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
