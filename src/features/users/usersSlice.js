import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '1', name: 'Jimmy Butler' },
  { id: '2', name: 'Lebron James' },
];

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const selectAllUsers = state => state.users;

export default usersSlice.reducer;
