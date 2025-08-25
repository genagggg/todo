import { useState } from "react";

interface ToDo {
    id: number;
    text: string;
    completed: boolean;
}

type UserId = number;
export const ToDo_6 = ()=>{
    const [todos, setTodos] = useState<ToDo[]>([])
    const [inputValue, setInputValue] = useState<string>("")

    const addTodo=()=>{
        if(inputValue.trim()){
            setTodos([...todos, {
                id: Date.now(),
                text: inputValue,
                completed: false,
            }])
            setInputValue("")
        }
    }

    const deleteTodo =(id: UserId)=>{
setTodos(todos.filter(todo=> todo.id !== id))
    }

    const toggleTodo = (id: UserId)=>{
setTodos(todos.map(todo=>todo.id === id ? {...todo, completed: !todo.completed}:todo ))
    }
return(
    <>
    <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} placeholder="Введи значение"/>
    <button onClick={addTodo}>Сохранить</button>
    <ul>
        {todos.map((todo)=><li key={todo.id}>
           <input type="checkbox" checked={todo.completed} onChange={()=>toggleTodo(todo.id)}/>
            {todo.text}
            <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
        </li>)}
    </ul>
    </>
)
}