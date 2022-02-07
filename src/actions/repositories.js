import axios from "axios";
import {
    setContributors,
    setCurrentRepo, setFetchingCurrentRepo,
    setFetchingRepositories,
    setRepositories
} from "../reducers/repositoriesReducer";

export const fetchRepositories = (searchQuery = "stars:%3E1", currentpage, rowsPerPage) => {
    if (searchQuery  == "") {
        searchQuery = "stars:%3E1"
    }

    return async (dispatch) => {
        dispatch(setFetchingRepositories())
        const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery || ''}&page=${currentpage}&per_page=${rowsPerPage}&sort=stars`)
        dispatch(setRepositories(response.data))
    }
}

export const fetchCurrentRepo = (username, reponame) => {
    return async (dispatch) => {
        dispatch(setFetchingCurrentRepo())
        const response = await axios.get(`https://api.github.com/repos/${username}/${reponame}`)
        dispatch(setCurrentRepo(response.data))
    }
}

export const fetchCurrentRepoContributors = (username, reponame) => {
    return async (dispatch) => {
        dispatch(setFetchingCurrentRepo())
        const response = await axios.get(`https://api.github.com/repos/${username}/${reponame}/contributors?per_page=5`)
        dispatch(setContributors(response.data))
    }
}