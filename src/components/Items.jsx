import {useDispatch, useSelector} from "react-redux";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {Avatar, Box, List, ListItemAvatar, Skeleton, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import LinkIcon from '@mui/icons-material/Link';
import IconButton from '@mui/material/IconButton';
import {useEffect} from "react";
import {fetchRepositories} from "../actions/repositories";

const Items = () => {

    const { repositories, isFetchingRepositories } = useSelector(state => state.repositories)

    if (repositories.length === 0) {
        return "Ничего не найдено"
    }

    return (
        <List>
            {
                !isFetchingRepositories ? <>
                    {
                        repositories.map(el => {
                            return <ListItem
                                button
                                component={NavLink}
                                to={`/repositories/${el.owner.login}/${el.name}`}
                                key={el.id}
                                alignItems="flex-start"
                                secondaryAction={
                                    <IconButton href={el.owner.url}>
                                        <LinkIcon />
                                        {/*link = */}
                                    </IconButton>
                                }
                            >
                                <ListItemAvatar>

                                    <Avatar alt="Remy Sharp" src={el.owner.avatar_url} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={`${el.name} [${el.stargazers_count} звезд]`}
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
                                            {` Последний коммит = ${el.updated_at}`}
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