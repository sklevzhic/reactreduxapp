import {useDispatch, useSelector} from "react-redux";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {Avatar, Box, List, ListItemAvatar, Skeleton, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import {useEffect} from "react";
import {fetchRepositories} from "../actions/repositories";

const Items = () => {
    const dispatch = useDispatch()
    const { repositories, isFetchingRepositories } = useSelector(state => state.repositories)


    return (
        <List>
            {
                !isFetchingRepositories ? <>
                    {
                        repositories.map(el => {
                            return <ListItem
                                button
                                component={NavLink}
                                to={`/card/${el.owner.login}/${el.name}`}
                                key={el.id}
                                alignItems="flex-start"
                                secondaryAction={
                                    <IconButton>
                                        <CommentIcon />
                                    </IconButton>
                                }
                            >
                                <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" src={el.owner.avatar_url} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={el.name}
                                    secondary={
                                        <>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                {el.owner.login}
                                            </Typography>
                                            {` stars = ${el.stargazers_count} last commit = ${el.updated_at} link = ${el.owner.url}`}
                                        </>
                                    }
                                />
                            </ListItem>
                        })
                    }
                </> :     <Box>
                    <Skeleton />
                    <Skeleton animation="wave" />
                </Box>
            }

        </List>

    )
}

export default Items