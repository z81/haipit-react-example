type setPostsLoaderAction = {
  type: "SET_POSTS_LOADER",
  foo: number
};
type setPostsAction = {
  type: "SET_POSTS",
  payload: {
    posts: [],
    totalPages: number,
    currentPage: number,
    newsPerPage: number,
    lastPage: number
  }
};

export type Action = |
  setPostsAction |
  setPostsLoaderAction;