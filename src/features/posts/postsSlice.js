import { createSlice, nanoid } from '@reduxjs/toolkit';

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
    postAdded: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (title, description) => {
        return {
          payload: {
            id: nanoid(),
            title,
            description,
          },
        };
      },
    },
  },
});

export const selectAllPosts = state => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
