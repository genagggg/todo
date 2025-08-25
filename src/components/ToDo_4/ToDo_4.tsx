import { useState } from "react";

interface ToDo {
  id: number;
  text: string;
  completed: boolean;
}


export const ToDo_4 = () => {
  const [todo, setTodo] = useState<ToDo[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const addTodo = () => {
    if (inputValue.trim()) {
      setTodo([
        ...todo,
        {
          id: Date.now(),
          text: inputValue,
          completed: false,
        },
      ]);
      setInputValue('')
    }  
  };

  const deleteTodo = (id: number) => {
    setTodo(todo.filter((item) => item.id !== id));
  };
  const toggleTodo =(id:number)=>{
    setTodo(todo.map(todo=>todo.id === id ? {...todo, completed: !todo.completed}: todo))
  }
  return (
    <div className="todo">
      <input
        type="text"
        value={inputValue}
        placeholder="Введи текст"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button onClick={addTodo}>Сохранить</button>
      <ul>
        {todo.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} onChange={()=>toggleTodo(todo.id)} /> {todo.text}
            <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
