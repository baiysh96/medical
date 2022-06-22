import React from 'react';
import {NavLink} from "react-router-dom";
import logo from "../../assets/images/logo.png"
const SideBar = () => {
    return (
        <div className="min-h-screen columns-xs bg-purple-800">
            <aside className="py-4">
                <img
                    className="h-24 block m-auto mb-8"
                    src={logo}
                    alt="logo"
                />
                <nav className="navbar">
                    <NavLink
                        to="/tasks"
                        className="nav pl-2 flex items-center space-x-1
                              py-2 text-white
                              hover:bg-violet-900
                              font-bold"
                    >
                        <i className='bx bx-grid-alt text-white mr-3 '></i>
                        Задачи и работы
                    </NavLink>

                    <NavLink
                        to="/projects"
                        className=" pl-2 nav flex items-center
                            space-x-1  py-2
                            text-white
                             hover:bg-violet-900
                             font-bold"
                    >
                        <i className='bx bx-grid-alt text-white mr-3'></i>
                        Проекты
                    </NavLink>

                    <NavLink
                        to="/calendar"
                        className="nav pl-2 flex items-center space-x-1
                              py-2 text-white
                              hover:bg-violet-900
                              font-bold"
                    >
                        <i className='bx bx-grid-alt text-white mr-3'></i>
                        Календарь
                    </NavLink>

                    <NavLink
                        to="/capability"
                        className="nav flex items-center
                            space-x-1 pl-2  py-2
                             text-white hover:bg-violet-900
                             font-bold"
                    >
                        <i className='bx bx-grid-alt text-white mr-3'></i>
                        Возможности
                    </NavLink>
                </nav>
            </aside>
        </div>
    );
};

export default SideBar;