import { createSlice } from '@reduxjs/toolkit';
import { postRequestAsync } from './postsAction';

const initialState = {
  loading: false,
  posts: [],
  error: '',
  after: '',
  isLast: false,
  page: '',
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload;
      state.after = '';
      state.isLast = false;
      state.posts = [];
    },
  },
  extraReducers: {
    [postRequestAsync.pending.type]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [postRequestAsync.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.posts = [...state.posts, ...action.payload.children];
      state.error = '';
      state.after = action.payload.after;
      state.isLast = !action.payload.after;
    },
    [postRequestAsync.rejected.type]: (state, action) => {
      state.error = action.payload.error;
      state.loading = false;
    },
  },
});

export default postsSlice.reducer;
