import {Button, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {fetchRepositories} from "../actions/repositories";
import {setSearchText} from "../reducers/repositoriesReducer";

const Search = () => {
    const { rowsPerPage, currentPage, searchText } = useSelector(state => state.repositories)
    const dispatch = useDispatch()
    const handlerSearch = () => {
        // dispatch(fetchRepositories(searchText, currentPage, rowsPerPage))
    }
    return (
        <>
            <TextField value={searchText} id="outlined-basic" label="Outlined" variant="outlined" onChange={(e) => dispatch(setSearchText(e.currentTarget.value))}/>
            <Button disabled={searchText.length === 0} variant="contained" onClick={() => handlerSearch()}>
                Send
            </Button>
        </>
    )
}

export default Search