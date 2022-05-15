import userReducer from './userSlice'
import todoReducer from './todoSlice'
import tokenReducer from './tokenSlice'

import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    user:userReducer,
    todos:todoReducer,
    token:tokenReducer,
  },
})