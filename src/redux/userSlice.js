import {createSlice} from '@reduxjs/toolkit'
export const userSlice=createSlice({
    name: 'user',
    initialState:{
        user:{},
    },  
    reducers:{
        setupUser:(state,action) => {
        console.log("*******************setupUser içindeyiz***************");
        state.user=action.payload;
        }   
    }
})
export const {setupUser} =userSlice.actions
export default userSlice.reducer
