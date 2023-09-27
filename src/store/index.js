
import { configureStore } from "@reduxjs/toolkit";

import chatReducer from './slices/chatSlice';

export const store = configureStore({
    reducer:{
        'chats' : chatReducer
    }
})


export * from './slices/chatSlice';