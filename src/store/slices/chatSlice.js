// chatSlice.js
import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    step: 1,
    chatMessages: [],
    selectedDate: null,
    selectedTime: null,
    name: '',
    age: '',
  },
  reducers: {
    nextStep: (state) => {
      state.step += 1;
    },
    addChatMessage: (state, action) => {
      state.chatMessages.push(action.payload);
    },
    selectDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    selectTime: (state, action) => {
      state.selectedTime = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
  },
});

export const {
  nextStep,
  addChatMessage,
  selectDate,
  selectTime,
  setName,
  setAge,
} = chatSlice.actions;

export default chatSlice.reducer;