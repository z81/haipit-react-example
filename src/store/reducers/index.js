// @flow

import {
  Action
} from '../actionTypes';

type State = {+posts: Array < {+id: number
  } > ,
  +currentPage: number
};

const loadingPosts = [1, 2, 3, 4, 5, 6].map(id => ({
  id,
  isLoading: true
}));

const initialState: State = {
  posts: [],
  currentPage: 0
};

const setDefaultImageHeight = (text: string) => {
  const imgHeight = window.screen.width / 6;

  const clb = (img) => `${img} height="${imgHeight}px" onload="imgFixLoader(this)" `;
  return text.replace(/<img /gim, clb);
};

export default function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case "SET_POSTS":
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
    case "SET_POSTS_LOADER":
      return {
        ...state,
        posts: loadingPosts
      };
    default:
      return state;
  }
}