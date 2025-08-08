import { useState } from "react";

type Todo = {
    id: number;
    text: string;
    completed: boolean;
}

export const WorkTodo =()=>{
    const [todos, setTodos] = useState<Todo[]>([])
    const [inputValue, setInputValue] = useState('')
    const addTodo = ()=>{
        if(inputValue.trim()){
            setTodos([...todos, {
                id: Date.now(),
                text: inputValue,
                completed: false,
            }])
            setInputValue('');
        }
    }

    console.log(todos)
    return(
        <div className="todo-app">
            <h3>ToDo</h3>
            <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} placeholder="What need to be done"/>

            <div className="filters"></div>
            <div className="add-todo" onClick={addTodo}>AddTodo</div>
            <ul className="todo-list">

            </ul>
        </div>
    )
}