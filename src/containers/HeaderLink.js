// @flow

import {
    connect
} from 'react-redux'

import {
    goToPage
} from '../store/actions'

import {
    Header
} from '../components/Header'

const mapStateToProps = ({
    totalPages,
    currentPage,
    newsPerPage,
    lastPage
}) => ({
    totalPages,
    currentPage,
    newsPerPage,
    lastPage
})

const mapDispatchToProps = (dispatch) => {
    return {
        goToPage: (page) => dispatch(goToPage(page))
    }
}

export const HeaderLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)