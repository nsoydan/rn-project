import {createSlice} from '@reduxjs/toolkit'
export const tokenSlice=createSlice({
    name: 'token',
    initialState:{ value:1 },  
    reducers:{
        setupToken:(state,action) => {
        console.log("*******************setup TOken içindeyiz***************");
        state.value=action.payload;
        }   
    }
})
export const {setupToken} =tokenSlice.actions
export default tokenSlice.reducer
