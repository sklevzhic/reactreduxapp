import {Pagination} from "@mui/material";
import {useNavigate} from "react-router-dom";

const PaginationComponent = ({pagesPagination, currentPage}) => {
    const navigate = useNavigate();

    const handleChange = (event, value) => {
        navigate({
            pathname: '/repositories',
            search: `?page=${value}`,
        })
    };

    return (
        <Pagination count={pagesPagination} defaultPage={currentPage} page={currentPage} onChange={handleChange}/>
    )
}

export default PaginationComponent