import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProject = ({project,setProject,setModalActive}) => {
    const formik = useFormik({
        initialValues: {
            image:  "",
            title: "",
            date1:"",
            date2:"",
            director: "",
            admin: ""
        },validationSchema: Yup.object({
            image: Yup.string()
                .min(2,'Must be 2 characters  more')
                .required('Required field'),
            title: Yup.string()
                .min(2,'Must be 2 characters  more')
                .max(20, 'Must be 20 characters or less')
                .required('Required field'),
           date1: Yup.string()
                .required('Required field'),
            date2: Yup.string()
                .required('Required field'),
            director: Yup.string()
                .min(3,'Must be 3 characters  more')
                .max(20, 'Must be 20 characters or less')
                .required('Required field'),
            admin: Yup.string()
                .min(3,'Must be 3 characters  more')
                .max(20, 'Must be 20 characters or less')
                .required('Required field'),
        }),
       onSubmit: async(values) => {
           console.log(formik.values)
            const createdProject = await axios.post("https://62b301d820cad3685c9916ab.mockapi.io/project/", values)
           console.log(createdProject.data)
            setProject([...project,createdProject.data])
           setModalActive(false)
           values({
               image:"",
               title:"",
               date1:"",
               date2:"",
               director:"",
               admin:""
           })
           toast.dark("Проект успешно добавлена");
        },
    });


    return (
        <div>
            <div onClick={() => {
                setModalActive(false)
            }} className="bg-black text-white fixed top-0 right-0  w-full h-screen overflow-y-scroll " >
            <div onClick={(e) => e.stopPropagation()} className=" bg-black sm:max-w-md p-5 mx-auto overflow-y-scroll">
                <div onClick={() => {
                    setModalActive(false)
                } }
                     className="absolute text-2xl right-5 top-6 text-purple-700 cursor-pointer text-transform-uppercase"><strong>x</strong></div>

            <form  onSubmit={formik.handleSubmit}>
                <h1 className="text-black-900 mb-3 text-2xl text-center">Добавить проект</h1>
                <div className="mb-4">
                <label htmlFor="image">
                    Ссылка на изображения
                    <input   className=" text-black py-2 px-3 border border-gray-300
                    focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50
                    rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
                        onChange={formik.handleChange}
                        id="image"
                        name="image"
                        value={formik.values.image}
                    />
                </label>
                    {formik.errors.image?<div className="text-red-700">{formik.errors.image}</div>:null}

                </div>
               <div className="mb-4">
                   <label htmlFor="title">
                       Название
                       <input   className=" text-black py-2 px-3
                       border border-gray-300 focus:border-red-300 focus:outline-none
                       focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md
                       shadow-sm disabled:bg-gray-100 mt-1 block w-full"
                                onChange={formik.handleChange} id="title" name="title"
                                value={formik.values.title}
                       />

                   </label>
                   {formik.errors.title?<div className="text-red-700">{formik.errors.title}</div>:null}
               </div>
                <div className="mb-4">
                    <label htmlFor="date">
                        Начало
                        <input   className=" text-black py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
                                 onChange={formik.handleChange} id="date" name="date1"
                                 type="date"
                                 value={formik.values.date1}
                        />

                    </label>
                    {formik.errors.date1?<div className="text-red-700">{formik.errors.date1}</div>:null}
                </div>
                <div className="mb-4">
                    <label htmlFor="date">
                        Kонец
                        <input   className="py-2 text-black px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
                                 onChange={formik.handleChange} id="date" name="date2"
                                 type="date"
                                 value={formik.values.date2}
                        />

                    </label>
                    {formik.errors.date2?<div className="text-red-700">{formik.errors.date2}</div>:null}
                </div>
              <div className="mb-4">
                  <label htmlFor="director">
                      Директор
                      <input   className=" text-black py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
                               onChange={formik.handleChange} id="director"
                               name="director"
                               type="text"
                               value={formik.values.director}
                      />

                  </label>
                  {formik.errors.director?<div className="text-red-700">{formik.errors.director}</div>:null}

              </div>
              <div className="mb-4">
                  <label htmlFor="admin">
                      Администратор
                      <input   className=" text-black py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
                               onChange={formik.handleChange}
                               type="text"
                               id="admin" name="admin"
                               value={formik.values.admin}
                      />
                  </label>
                  {formik.errors.admin?<div className="text-red-700">{formik.errors.admin}</div>:null}

              </div>
                    <button
                        className="
                         px-4 py-2 border-none rounded-md capitalize text-white hover:bg-fuchsia-700
                         bg-fuchsia-800
                          transition w-full"
                        type="submit"  >
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