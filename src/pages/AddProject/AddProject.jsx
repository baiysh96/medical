import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Inputs from "../../components/Inputs";

const AddProject = ({project, setProject, setModalActive}) => {
    const formik = useFormik({
        initialValues: {
            image: "",
            title: "",
            date1: "",
            date2: "",
            director: "",
            admin: ""
        }, validationSchema: Yup.object({
            image: Yup.string()
                .min(2, 'Must be 2 characters  more')
                .required('Required field'),
            title: Yup.string()
                .min(2, 'Must be 2 characters  more')
                .max(20, 'Must be 20 characters or less')
                .required('Required field'),
            date1: Yup.string()
                .required('Required field'),
            date2: Yup.string()
                .required('Required field'),
            director: Yup.string()
                .min(3, 'Must be 3 characters  more')
                .max(20, 'Must be 20 characters or less')
                .required('Required field'),
            admin: Yup.string()
                .min(3, 'Must be 3 characters  more')
                .max(20, 'Must be 20 characters or less')
                .required('Required field'),
        }),
        onSubmit: async (values) => {
            const createdProject = await axios.post("https://62b301d820cad3685c9916ab.mockapi.io/project/", values)
            setProject([...project, createdProject.data])
            setModalActive(false)
            toast.dark("Проект успешно добавлена");
        },
    });


    return (
        <div>
            <div onClick={() => {
                setModalActive(false)
            }} className="bg-black text-white fixed top-0 right-0  w-full h-screen overflow-y-scroll z-30 ">
                <div onClick={(e) => e.stopPropagation()}
                     className=" bg-black sm:max-w-md p-5 mx-auto overflow-y-scroll">
                    <div onClick={() => {
                        setModalActive(false)
                    }}
                         className="absolute right-6 top-8 text-purple-700 cursor-pointer close-btn">
                        <span/>
                    </div>

                    <form onSubmit={formik.handleSubmit}>
                        <h1 className="text-black-900 mb-3 text-2xl text-center">Добавить проект</h1>
                        <div className="mb-4">

                            <Inputs
                                label="Ссылка на изображения"
                                onChange={formik.handleChange}
                                id="image"
                                name="image"
                                value={formik.values.image}
                                error={formik.errors.image}
                                type="text"
                                placeholder="Ссылка на изображения"
                            />

                        </div>
                        <div className="mb-4">
                            <Inputs
                                label="Название"
                                onChange={formik.handleChange}
                                id="title"
                                name="title"
                                value={formik.values.title}
                                error={formik.errors.title}
                                type="text"
                                placeholder="Название"
                            />
                        </div>
                        <div className="mb-4">
                            <Inputs
                                label="Начало"
                                onChange={formik.handleChange}
                                id="date1"
                                name="date1"
                                value={formik.values.date1}
                                error={formik.errors.date1}
                                type="date"
                                placeholder="Начало"
                            />
                        </div>
                        <div className="mb-4">
                            <Inputs
                                label="Kонец"
                                onChange={formik.handleChange}
                                id="date2"
                                name="date2"
                                value={formik.values.date2}
                                error={formik.errors.date2}
                                type="date"
                                placeholder="Kонец"
                            />
                        </div>
                        <div className="mb-4">
                            <Inputs
                                label="Директор"
                                onChange={formik.handleChange}
                                id="director"
                                name="director"
                                value={formik.values.director}
                                error={formik.errors.director}
                                type="text"
                                placeholder="Директор"
                            />
                        </div>
                        <div className="mb-4">
                            <Inputs
                                label=" Администратор"
                                onChange={formik.handleChange}
                                id="admin"
                                name="admin"
                                value={formik.values.admin}
                                error={formik.errors.admin}
                                type="text"
                                placeholder=" Администратор"
                            />
                        </div>
                        <button
                            className="
                         px-4 py-2 border-none rounded-md
                          capitalize text-white
                          hover:bg-fuchsia-700
                          bg-fuchsia-800
                          transition w-full
                          text-sm"
                            type="submit">
                            Create
                        </button>
                    </form>
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
    );
};

export default AddProject;