import React, {useEffect} from 'react';
import "./App.css"
import {Route, Routes, useNavigate} from "react-router-dom";
import Login from "./pages/Login";
import Project from "./pages/Project";
import Tasks from "./pages/Tasks";
import Calendar from "./pages/Calendar";
import Capability from "./pages/Capability";
import { useLocation } from 'react-router-dom';


const App = () => {
    const navigate = useNavigate()
    let location = useLocation();
 useEffect(() => {
     if(location.pathname === "/") {
         navigate("/login")
     }
 },[location.pathname,navigate])
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/capability" element={<Capability/>} />
        </Routes>

    );
};

export default App;