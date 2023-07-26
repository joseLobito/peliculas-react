import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { MovieDetails } from "../pages/MovieDetails";
export const MyRoutes = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<LandingPage />} />
                    <Route exact path="/movies/:movieId" element={<MovieDetails />} />
                </Routes>
            </Router>
        </div>
    );
};
