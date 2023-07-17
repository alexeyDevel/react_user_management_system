import * as React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
import SingUpPage from "../../pages/SignUpPage";
import LoginPage from "../../pages/LoginPage";
import HomePage from "../../pages/HomePage";
import OurTeamPage from "../../pages/OurTeamPage";
import AboutPage from "../../pages/AboutPage";

export default function App() {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate("/our-team");
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />}> 
        <Route path="our-team" element={<OurTeamPage />}/>
        <Route path="our-team/:id" element={<AboutPage />}/>
      </Route>
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/SingUp" element={<SingUpPage />} />
    </Routes>
  );
}