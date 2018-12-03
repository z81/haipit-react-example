// @flow

import * as types from '../actionTypes';

export function goToPage(page) {
    return async (dispatch, getState, {
        API_PATH
    }) => {
        try {
            dispatch({
                type: types.SET_POSTS_LOADER
            });



            const req = await fetch(`${API_PATH}news?page=${page}`);
            const {
                data: posts,
                total: totalPages,
                per_page: newsPerPage,
                current_page: currentPage,
                last_page: lastPage
            } = await req.json();

            dispatch({
                type: types.SET_POSTS,
                payload: {
                    posts,
                    totalPages,
                    currentPage,
                    newsPerPage,
                    lastPage
                }
            });
        } catch (error) {
            console.error(error);
        }
    };
}