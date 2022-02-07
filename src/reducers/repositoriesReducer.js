const SET_REPOSITORIES = 'SET_REPOSITORIES'
const SET_IS_FETCHING_REPOSITORIES = 'SET_IS_FETCHING_REPOSITORIES'
const SET_PAGES_PAGINATION = 'SET_PAGES_PAGINATION'
const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_CURRENT_REPO = 'SET_CURRENT_REPO'
const SET_CONTRIBUTORS = 'SET_CONTRIBUTORS'
const SET_FETCHING_CONTRIBUTORS = 'SET_FETCHING_CONTRIBUTORS'
const SET_FETCHING_CURRENT_REPO = 'SET_FETCHING_CURRENT_REPO'

const defaultState = {
    repositories: [],

    isFetchingRepositories: false,
    currentPage: 31,
    rowsPerPage: 10,
    pagesPagination: 0,
    searchText: "",
    currentRepo: {},
    isFetchingCurrentRepo: false,
    contributors: [],
    isFetchingContributors: false,
}

export default function repositoriesReducer(state = defaultState, action) {

    switch (action.type) {
        case SET_REPOSITORIES:
            return {
                ...state,
                repositories: action.payload.items,
                pagesPagination: Math.ceil(action.payload.total_count / state.rowsPerPage),
                isFetchingRepositories: false
            }
        case SET_IS_FETCHING_REPOSITORIES:
            return {
                ...state,
                isFetchingRepositories: true
            }
        case SET_PAGES_PAGINATION:
            return {...state, pagesPagination: action.payload}
        case SET_SEARCH_TEXT:
            return {...state, searchText: action.payload}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload}
        case SET_CURRENT_REPO:
            return {
                ...state,
                currentRepo: action.payload,
                isFetchingCurrentRepo: false
            }
        case SET_CONTRIBUTORS:
            return {
                ...state,
                contributors: action.payload,
                isFetchingContributors: false
            }
        case SET_FETCHING_CONTRIBUTORS:
            return {
                ...state,
                isFetchingContributors: true
            }
        case SET_FETCHING_CURRENT_REPO:
            return {
                ...state,
                isFetchingRepositories: true
            }
        default:
            return state
    }
}

export const setRepositories = (payload) => ({type: SET_REPOSITORIES, payload})
export const setFetchingRepositories = () => ({type: SET_IS_FETCHING_REPOSITORIES})
export const setPagesPagination = (payload) => ({type: SET_PAGES_PAGINATION, payload})
export const setSearchText = (payload) => ({type: SET_SEARCH_TEXT, payload})
export const setCurrentPage = (payload) => ({type: SET_CURRENT_PAGE, payload})
export const setCurrentRepo = (payload) => ({type: SET_CURRENT_REPO, payload})
export const setContributors = (payload) => ({type: SET_CONTRIBUTORS, payload})
export const setFetchingCurrentRepo = () => ({type: SET_FETCHING_CURRENT_REPO})
export const setFetchingContributors = () => ({type: SET_FETCHING_CONTRIBUTORS})