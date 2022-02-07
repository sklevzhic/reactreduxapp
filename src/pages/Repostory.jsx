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


const CardItem = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let { login, repo } = useParams();
    const {currentRepo, contributors, isFetchingContributors} = useSelector(state => state.repositories)

    useEffect(() => {
        dispatch(fetchCurrentRepo(login, repo))
    }, [])

    useEffect(() => {
        dispatch(fetchCurrentRepoContributors(login, repo))
    }, [])

    return (
        <Grid container>
            <Button variant="contained" onClick={() => navigate(-1)}>back</Button>

            <Grid container>
                <Grid item xs={4}>
                    {
                        currentRepo.owner !== undefined &&                     <Card sx={{maxWidth: 345}}>
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
                    }
                </Grid>
                <Grid item xs={8}>
                    <Typography variant={"h6"}>
                        Contributors
                    </Typography>
                    <List
                        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                        aria-label="contacts"
                    >
                        {
                            !isFetchingContributors ? <>
                                {
                                    contributors.map(el => {
                                        return <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemText primary={el.login} />
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

export default CardItem