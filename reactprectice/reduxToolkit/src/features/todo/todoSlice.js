import { createSlice, nanoid } from '@reduxjs/toolkit'

const func = () =>{
    return "hello sourov"
}
const initialState = {
    todos: [{
        id: 1,
        text: func,
    }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo: (state, action)=>{
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action)=>{
           state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        },
        updateTodo:(state, active)=>{
             const {id, text} = active.payload;
             const todo = state.todos.find((todo)=>todo.id===id);
             if(todo){
                state.text = text;
             }
        }
    }
})

export const {addTodo, updateTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;
