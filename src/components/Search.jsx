import {Button, InputAdornment, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {fetchRepositories} from "../actions/repositories";
import {setSearchText} from "../reducers/repositoriesReducer";
import {useNavigate} from "react-router-dom";

import {useState} from "react";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from "@mui/material/IconButton";

const Search = () => {
    const {rowsPerPage, currentPage, searchText} = useSelector(state => state.repositories)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [value, setValue] = useState(null);
    const handlerSearchButton = () => {
        dispatch(fetchRepositories(searchText, currentPage, rowsPerPage))
        navigate('/repositories')
    }

    const handlerSearchText = (e) => {
        dispatch(setSearchText(e.currentTarget.value))
    }

    const handleClearTextField = () => {
        dispatch(setSearchText(""))
        navigate('/repositories')
    }
    return (
        <>
            <TextField
                size="small"
                value={searchText}
                label="Введите наименование репозитория"
                variant="outlined"
                onChange={handlerSearchText}
                InputProps={{
                    endAdornment: (searchText.length !== 0 && <IconButton onClick={handleClearTextField}>
                            <CloseIcon/>
                        </IconButton>

                    ),
                }}
            />
            <Button
                disabled={searchText.length === 0}
                variant="contained"
                onClick={handlerSearchButton}
            >
                Send
            </Button>
        </>
    )
}

export default Search