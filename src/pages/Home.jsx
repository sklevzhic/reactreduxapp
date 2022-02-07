import {NavLink} from "react-router-dom";
import {Button} from "@mui/material";


const HomePage = () => {

    return (
        <div>
            Реакт/редакс приложение <br/>

            Получение  списка пользователей с сервера / пагинация / роутинг
            <Button component={NavLink} to={"/repositories"}>Go</Button>
        </div>
    )
}

export default HomePage