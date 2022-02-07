import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route, Navigate
} from "react-router-dom";
import Main from "./pages/Repositories";
import Card from "./pages/Repostory";
import {Container} from "@mui/material";
import HomePage from "./pages/Home";
import Repositories from "./pages/Repositories";

function App() {
  return (
    <Container>
        <Router>
            <Routes>
                <Route exact path='/repositories' element={<Repositories />} />
                <Route exact path='/' element={<HomePage/>} />
                {/*<Route path='/card/:login/:repo' element={<Card />} />*/}
                <Route
                    path="*"
                    element={<Navigate to="/" />}
                />
            </Routes>
        </Router>

    </Container>
  );
}

export default App;
