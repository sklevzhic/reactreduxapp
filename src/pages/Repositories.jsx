import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Search from "../components/Search";
import {useSearchParams} from "react-router-dom";
import {setCurrentPage} from "../reducers/repositoriesReducer";
import PaginationComponent from "../components/Pagination";
import Items from "../components/Items";
import {fetchRepositories} from "../actions/repositories";

const Repositories = () => {
    const {searchText, currentPage, rowsPerPage, pagesPagination} = useSelector(state => state.repositories)
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams();
    let currentPageURL = +searchParams.get('page')

    useEffect(() => {
        if (currentPageURL === 0) {
            currentPageURL = 1
        }
        dispatch(setCurrentPage(currentPageURL))
    }, [currentPageURL])

    useEffect(() => {
        dispatch(fetchRepositories(searchText, currentPage, rowsPerPage))
    }, [currentPage])

    return (
        <div>
            <Search/>
            <Items/>
            <PaginationComponent pagesPagination={pagesPagination} currentPage={currentPage}/>
        </div>
    )
}

export default Repositories