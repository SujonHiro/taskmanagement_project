// eslint-disable-next-line no-unused-vars
import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DashboardPage from "./pages/DashboardPage.jsx";
import CanceledPage from "./pages/CanceledPage.jsx";
import CompletedPage from "./pages/CompletedPage.jsx";
import ProgressPage from "./pages/ProgressPage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import NewPage from "./pages/NewPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import ForgetPassPage from "./pages/ForgetPassPage.jsx";
import FullScreenLoader from "./components/MasterLayout/FullScreenLoader.jsx";
import {getToken} from "./helper/SessionAlert.js";
import {Toaster} from "react-hot-toast";
const App = () => {
        if(getToken()){
            return (
                <>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<DashboardPage/>}/>
                            <Route path="/canceled" element={<CanceledPage/>}/>
                            <Route path="/completed" element={<CompletedPage/>}/>
                            <Route path="/progress" element={<ProgressPage/>}/>
                            <Route path="/create" element={<CreatePage/>}/>
                            <Route path="/all" element={<NewPage/>}/>
                            <Route path="/profile" element={<ProfilePage/>}/>
                            <Route path="/login" element={<LoginPage/>}/>
                            <Route path="/registration" element={<RegistrationPage/>}/>
                            <Route path="/forgetpass" element={<ForgetPassPage/>}/>
                            <Route path="*" element={<NotFoundPage/>}/>
                        </Routes>
                    </BrowserRouter>
                    <Toaster/>
                    <FullScreenLoader/>
                </>
            )
        }else{
            return (
                <>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/login" element={<LoginPage/>}/>
                            <Route path="/registration" element={<RegistrationPage/>}/>
                            <Route path="/forgetpass" element={<ForgetPassPage/>}/>
                            <Route path="*" element={<NotFoundPage/>}/>
                        </Routes>
                    </BrowserRouter>
                    <Toaster/>
                    <FullScreenLoader/>
                </>
            )
        }

};

export default App;