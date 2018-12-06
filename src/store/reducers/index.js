// @flow

import * as types from '../actionTypes';

declare interface initialState {
  posts: mixed[];
  currentPage: number;
}

const loadingPosts = [1, 2, 3, 4, 5, 6].map(id => ({
  id,
  isLoading: true
}))

const initialState = {
  posts: [],
  currentPage: 1
};

const setDefaultImageHeight = (text: string) => text.replace(/<img /gmi, img => `${img} height="${window.screen.width / 6}px" `)

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_POSTS:
      return {
        ...state,
        ...action.payload,
        posts: action.payload.posts.map(({
          description,
          ...post
        }) => ({
          ...post,
          description: setDefaultImageHeight(description || '')
        }))
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