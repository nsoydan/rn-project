import {createSlice} from '@reduxjs/toolkit'
export const todoSlice=createSlice({
    name: 'todos',
    initialState:{ },  
    reducers:{ 
        setupTodos:(state,action) => {
            console.log("*******************setupTodos içindeyiz***************");
            state.todos=action.payload;
        },
        removeTodo:(state,action)=>{
            console.log("********REMOVE TODO******")
            state.todos.filter(data=>data.id ==action.payload)
            
        }   
    }
})
export const {setupTodos,removeTodo} =todoSlice.actions
export default todoSlice.reducer
