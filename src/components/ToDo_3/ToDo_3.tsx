import { useState } from "react";
interface ToDo {
  id: number;
  text: string;
  completed: boolean;
}
export const ToDo_3 = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [todo, setTodo] = useState<ToDo[]>([]);
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
    }
    setInputValue("")
  };

  const deleteToDo =(id:number)=>{
setTodo(todo.filter((item)=>item.id !== id))
  }

  const toggleTodo = (id:number)=>{
setTodo(todo.map((item)=>item.id === id ?{...item, completed: !item.completed} : item))
  }
  return (
    <div className="Todo-3">
      <h1>ToDo</h1>
      <input
        type="text"
        value={inputValue}
        placeholder="Введи дело"
        onChange={(e)=>setInputValue(e.target.value)}
      />
      <button onClick={addTodo}>Save</button>
      <ul>
        {todo.map(item=>
        <li key={item.id}>{item.text} 
        <input type="checkbox" checked={item.completed} onChange={()=>toggleTodo(item.id)}/>
        <button onClick={()=>deleteToDo(item.id)}>Delete</button>
        </li>)}
      </ul>
    </div>
  );
};
