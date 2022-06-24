import React, {useState} from 'react';
import logo from "../../assets/images/logo.png"
import {Link,useNavigate} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Login = () => {
    const navigate = useNavigate()
    const [login,setLogin] = useState("")
    const [password,setPassword] = useState("")

    const handleChange = (e) => {
        setLogin(e.target.value)
        setPassword( e.target.value)

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(login === "admin" && password === "admin"){
            navigate(`/projects`)
        } else {
            toast.success("Вы ввели неверные данные");
            setPassword("") && setLogin("")
        }
    }

    return (
        <div>
            <div className="bg-white w-full min-h-screen  flbg-gray-50ex flex-col sm:justify-center items-center pt-6 sm:pt-0">
                <div className="w-full sm:max-w-md  mx-auto">
                    <Link className="block ml-auto" to="/" ><img className="block mx-auto mb-6 mt-2" src={logo} width="200px" height="100px" alt=""/></Link>
                        <div className="mb-4">
                            <label className="block text-xl mb-1 ml-4 text-black" htmlFor="email">Логин</label>
                            <input onChange={handleChange}
                                id="email" type="text" name="email"
                                   placeholder="Login"
                                   className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-xl mb-1 ml-3 text-black " htmlFor="password">Пароль</label>
                            <input onChange={handleChange}
                                id="password" type="password" name="password"
                                   placeholder="Password"
                                   className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"/>
                        </div>
                        <div className="mt-6 flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="checkbox" type="checkbox"
                                       className="checkbox-custom"/>
                                <label htmlFor="checkbox" className="checkbox-custom-label ml-2  text-l text-black">
                                    Запомнить пароль
                                </label>
                            </div>

                        </div>
                        <div className="mt-6">
                            <button onClick={(e) => {
                                handleSubmit(e)
                            }}
                                    type="button"
                                className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-fuchsia-700 bg-fuchsia-600 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">
                               Войти
                            </button>
                        </div>
                        <div className="mt-6 text-start">
                            <a href="/" className="text-fuchsia-700">Забыли пароль?</a>
                        </div>
                </div>
                <ToastContainer
                    position="top-center"
                    autoClose={9000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>
        </div>
    );
};

export default Login;