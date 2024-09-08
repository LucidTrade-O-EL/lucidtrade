import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../screens/Login/Login";
import SignUp from "../screens/SignUp/Signup";
import SetPassword from "../screens/Password/SetPassword/SetPassword";
import PasswordResetComplete from "../screens/Password/PasswordResetComplete/PasswordResetComplete";
import ForgotPassword from "../screens/Password/ForgetPassword/ForgotPassword";
import Verify from "../screens/Verify/Verify";
import LoadingScreen from "../screens/Loading/LoadingScreen";
import Home from "../screens/Home/Home";
import Portfolio from "../screens/Portfolio/Portfolio";
import Dashboard from "../common-components/Dashboard/Dashboard";

export enum ScreenRoutes {
  Login = "/",
  SignUp = "/signup",
  ForgotPassword = "/forgot-password",
  SetPassword = "/set-password",
  ResetComplete = "/reset-complete",
  Verify = "/verify",
  Loading = "/loading",
  Home = "/home",
  Portfolio = "/portfolio",
  Dashboard = "/dashboard",
  Solar = "/Solar"
}

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path={ScreenRoutes.Login} element={<Login />} />
      <Route path={ScreenRoutes.Home} element={<Home />} />
      <Route path={ScreenRoutes.SignUp} element={<SignUp />} />
      <Route path={ScreenRoutes.ForgotPassword} element={<ForgotPassword />} />
      <Route path={ScreenRoutes.SetPassword} element={<SetPassword />} />
      <Route
        path={ScreenRoutes.ResetComplete}
        element={<PasswordResetComplete />}
      />
      <Route path={ScreenRoutes.Verify} element={<Verify />} />
      <Route path={ScreenRoutes.Loading} element={<LoadingScreen />} />
      <Route path={ScreenRoutes.Portfolio} element={<Portfolio />} />
      <Route path={ScreenRoutes.Dashboard} element={<Dashboard />} />
    </Routes>
  </Router>
);

export default AppRoutes;
