import { Routes, BrowserRouter as Router, Route} from "react-router-dom";
import { Main } from "./pages/main/Main";

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main/>} />
            </Routes>
        </Router>
    )
}
