import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginReg from "./pages/auth/LoginReg";
import ResetPassword from "./pages/auth/ResetPassword";
import ChangePassword from "./pages/auth/ChangePassword";
import SendPasswordResetEmail from "./pages/auth/SendPasswordResetEmail";
import Profile from "./components/dashboard/Profile";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Gallery from "./components/gallery/Gallery";
import SideNav from "./components/TandPCell/SideNav";
import Layout from "./pages/Layout";
import { useSelector } from "react-redux";


function App() {
  const { access_token } = useSelector(state => state.auth)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={!access_token ? <LoginReg /> : <Navigate to="/dashboard" />} />
            <Route path="changepassword" element={<ChangePassword />} />
            <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
            <Route path="api/account/reset/:id/:token" element={<ResetPassword />} />
            <Route path="/dashboard" element={access_token ? <Dashboard /> : <Navigate to="/login" />} />
            <Route path="/profile" element={access_token ? <Profile /> : <Navigate to="/login" />} />
            <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="tandpcell" element={<SideNav />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
