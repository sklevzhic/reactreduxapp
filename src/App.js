import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route, Navigate
} from "react-router-dom";
import {Container} from "@mui/material";
import HomePage from "./pages/Home";
import Repositories from "./pages/Repositories";
import Repository from "./pages/Repostory";

function App() {
  return (
    <Container>
        <Router>
            <Routes>
                <Route exact path='/repositories' element={<Repositories />} />
                <Route exact path='/' element={<HomePage/>} />
                <Route path='/repositories/:login/:repo' element={<Repository />} />
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
