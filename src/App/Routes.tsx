import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../screens/Login/Login";
import SignUp from "../screens/SignUp/Signup";
import SetPassword from "../screens/Password/SetPassword/SetPassword";
import PasswordResetComplete from "../screens/Password/PasswordResetComplete/PasswordResetComplete";
import ForgotPassword from "../screens/Password/ForgetPassword/ForgotPassword";
import Verify from "../screens/Verify/Verify";

export enum ScreenRoutes {
  Login = '/',
  SignUp = '/signup',
  ForgotPassword = '/forgot-password',
  SetPassword = '/set-password',
  ResetComplete = '/reset-complete',
  Verify = '/verify'
}

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path={ScreenRoutes.Login} element={<Login />} />
      <Route path={ScreenRoutes.SignUp} element={<SignUp />} />
      <Route path={ScreenRoutes.ForgotPassword} element={<ForgotPassword />} />
      <Route path={ScreenRoutes.SetPassword} element={<SetPassword />} />
      <Route path={ScreenRoutes.ResetComplete} element={<PasswordResetComplete />} />
      <Route path={ScreenRoutes.Verify} element={<Verify />} />
    </Routes>
  </Router>
);

export default AppRoutes;