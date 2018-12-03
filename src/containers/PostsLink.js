// @flow

import {
    connect
} from 'react-redux'

import {
    goToPage
} from '../store/actions'

import {
    PostList
} from '../components/PostList'

const mapStateToProps = ({
    posts,
    currentPage
}) => ({
    posts,
    currentPage
})

const mapDispatchToProps = (dispatch) => {
    return {
        goToPage: (page) => dispatch(goToPage(page))
    }
}

export const PostsLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(PostList)