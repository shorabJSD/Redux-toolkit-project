import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'
const AddTodo = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch();
    const addTodoHandler = (e) =>{
         e.preventDefault();
         dispatch(addTodo(input));
         setInput('')
    }
    return (
        <div>
            <form onSubmit={addTodoHandler}>
                <input
                    type="text"
                    value={input}
                    onChange={(e)=>setInput(()=>e.target.value)}
                />
            <input type="submit" value="Add" />
            </form>

        </div>
    )
}

export default AddTodo
