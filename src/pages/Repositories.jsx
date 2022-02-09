import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Search from "../components/Search";
import {useSearchParams} from "react-router-dom";
import {setCurrentPage} from "../reducers/repositoriesReducer";
import PaginationComponent from "../components/Pagination";
import Items from "../components/Items";
import {fetchRepositories} from "../actions/repositories";
import {Alert, Backdrop, Button, CircularProgress, Snackbar, Typography} from "@mui/material";

const Repositories = () => {
    const {
        searchText,
        currentPage,
        rowsPerPage,
        pagesPagination,
        error,
        isFetchingRepositories
    } = useSelector(state => state.repositories)
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams();
    const [open, setOpen] = useState(false);

    let currentPageURL = +searchParams.get('page')
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    useEffect(() => {
        if (currentPageURL === 0) {
            currentPageURL = 1
        }
        dispatch(setCurrentPage(currentPageURL))
    }, [currentPageURL])

    useEffect(() => {
        dispatch(fetchRepositories(searchText, currentPage, rowsPerPage))
    }, [currentPage, searchText])

    return (
        <div>
            <Search/>
            <Typography> Репозитории </Typography>
            {
                error && <Alert severity="error">{ error }. Повторите попытку позже</Alert>
            }
            <Items/>
            {
                isFetchingRepositories && <Backdrop
                    sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                    open={true}
                    onClick={handleClose}
                >
                    <CircularProgress color="inherit"/>
                </Backdrop>
            }


            <PaginationComponent pagesPagination={pagesPagination} currentPage={currentPage}/>
        </div>
    )
}

export default Repositories