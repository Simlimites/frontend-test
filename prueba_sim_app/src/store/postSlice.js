import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
}

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postsLoad: (state, action) => {
            return {
                ...state,
                posts: [ ...action.payload ]
            }
        },
        postUpdated: (state, action) => {
            return {
                ...state,
                posts: state.posts.map(
                    post => post.id === action.payload.id
                        ? action.payload.post
                        : post
                )
            }
        }
    }
});

export const { 
    postsLoad,
    postUpdated
} = postSlice.actions;

export default postSlice.reducer;