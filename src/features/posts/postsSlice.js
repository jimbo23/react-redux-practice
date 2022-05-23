import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, title: 'How to use redux', description: 'use reduxjs/toolkit' },
  {
    id: 2,
    title: 'What I think about redux',
    description: 'I love to use reduxjs',
  },
];

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const selectAllPosts = state => state.posts;

export const { addPost } = postsSlice.actions;

export default postsSlice.reducer;
