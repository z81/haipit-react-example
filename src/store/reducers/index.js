// @flow

import * as types from '../actionTypes';


const loadingPosts = [1, 2, 3, 4, 5, 6].map(id => ({
    id,
    isLoading: true
}))

const initialState = {
    posts: [],
    currentPage: 1
};

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.SET_POSTS:
            return {
                ...state,
                ...action.payload
            };
        case types.SET_POSTS_LOADER:
            return {
                ...state,
                posts: loadingPosts
            }
        default:
            return state;
    }
}