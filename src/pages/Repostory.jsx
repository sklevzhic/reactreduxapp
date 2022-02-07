import {useNavigate, useParams} from "react-router-dom";
import {
    Button,
    Card,
    CardContent,
    CardMedia,
    Grid, List,
    ListItem,
    ListItemText,
    Typography
} from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import {useEffect} from "react";
import {fetchCurrentRepo, fetchCurrentRepoContributors} from "../actions/repositories";
import {useDispatch, useSelector} from "react-redux";
import {setDeleteContributorsRepo, setDeleteCurrentRepo} from "../reducers/repositoriesReducer";


const Repository = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let {login, repo} = useParams();
    const {currentRepo, contributors, isFetchingContributors, isFetchingCurrentRepo} = useSelector(state => state.repositories)

    useEffect(() => {
        dispatch(fetchCurrentRepo(login, repo))
        return () => {
            dispatch(setDeleteCurrentRepo())
        }
    }, [])
    useEffect(() => {
        dispatch(fetchCurrentRepoContributors(login, repo))
        return () => {
            dispatch(setDeleteContributorsRepo())
        }
    }, [])

    return (
        <Grid container>
            <Button variant="contained" onClick={() => navigate(-1)}>back</Button>

            <Grid container>
                <Grid item xs={4}>
                    {
                        currentRepo.owner !== undefined ? <>
                            <Card sx={{maxWidth: 345}}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={currentRepo.owner.avatar_url}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography>
                                        {currentRepo.owner.login}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </> : "Загрузка"
                    }
                </Grid>
                <Grid item xs={8}>
                    <Typography variant={"h6"}>
                        Contributors
                    </Typography>
                    <List
                        sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
                        aria-label="contacts"
                    >
                        {
                            contributors ? <>
                                {
                                    contributors.map(el => {
                                        return <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemText primary={el.login}/>
                                            </ListItemButton>
                                        </ListItem>
                                    })
                                }
                            </> : "Загрузка"
                        }

                    </List>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default Repository