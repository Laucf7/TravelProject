import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import Home from '../pages/Home.tsx';
import AboutUs from '../pages/AboutUs.tsx';
import SignUpPage from '../pages/SignUp.tsx';
import LogIn from '../pages/LogIn.tsx';
import Discover from '../pages/Discover.tsx';
import Discover2 from '../pages/Discover2.tsx';
import NewItinerary from '../pages/NewItinerary.tsx';



function RoutesCom(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path= "/discover" element= {<Discover />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/destination" element={<Discover2 />} />
        <Route
          path="/new-itinerary"
          element={
            <ProtectedRoute>
              <NewItinerary />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}
export default RoutesCom;