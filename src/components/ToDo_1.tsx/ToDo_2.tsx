import { useState } from "react";

interface ToDo {
    id: number;
    text: string;

}

export const ToDo_1 = ()=>{
    const [inputValue, setInputValue] = useState("")
    const [todo, setTodo] = useState<ToDo[]>([])
    const addTodo = ()=>{
        if(inputValue.trim()){
            setTodo([...todo, {id: Date.now(), text: inputValue}])
        }
        setInputValue("")
    }
    return (
        <div className = "todo-app">
            <h3>ToDo_2</h3>
            <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
            <button onClick={addTodo}></button>
            <ul>
                {todo.map(item=><li key={item.id}>{item.text}</li>)}
            </ul>
        </div>
    )
}