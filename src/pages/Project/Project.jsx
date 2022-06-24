import React, { useEffect,useState} from 'react';
import AddProject from "../../pages/AddProject";
import axios from "axios";

import img from "../../assets/images/96452360.jpeg";
import user1 from "../../assets/images/user1.avif"
import user2 from "../../assets/images/user2.avif"
import user3 from "../../assets/images/user3.avif"
import Spinner from "../../components/Spinner";
import {Link,NavLink} from "react-router-dom";
import Layout from "../../components/Layout";
const Project = () => {
    const [project,setProject] = useState([])
    const [modalActive,setModalActive] = useState(false)
    const [isLoading,setIsLoading] = useState(true)
    const [pagination,setPagination] = useState(true)
    useEffect(() => {
        axios("https://62b301d820cad3685c9916ab.mockapi.io/project/")
            .then((res) => {
                setProject(res.data)
                setIsLoading(false)
            })
    },[setIsLoading,setProject])

    if(isLoading) {
        return <Spinner/>
    }
    return (

        <Layout>
            {
                modalActive &&
                <div
                    className="bg-[#0e101c] d-flex justify-center align-middle form fixed right-0 w-full bg-rgba(0 0 0 0.5)">
                    <AddProject
                        setModalActive={setModalActive}
                        project={project}
                        setProject={setProject}
                    />
                </div>
            }
            <h1 className="mt-4 font-bold text-2xl text-gray-500 uppercase mb-8">Проекты</h1>
            <div className=" links flex">
                <Link className={modalActive?"opacity-0": "ml-2 block uppercase spisok"} to="/projects">Список проектов </Link>
                <Link className={modalActive?"opacity-0":"ml-4 block   uppercase spisok"} to="/projects">Дорожные карты </Link>
            </div>
            <div className="flex justify-between ">
                <p className="uppercase text-lg mt-5 text-gray-500">Список проектов </p>
                <div className="project-btn">
                    <button  className=" inline-flex items-center
            justify-center px-4 py-2 border border-transparent
         rounded-md font-semibold capitalize text-white hover:bg-fuchsia-700
     bg-fuchsia-600 focus:outline-none focus:border-red-700 focus:ring
           focus:ring-red-200 disabled:opacity-25 transition blok"
                             onClick={() => setModalActive(true)}
                    >Добавить проект
                    </button>
                </div>
            </div>
            <div className="flex justify-end items-center pagination mb-4">
                <NavLink to="/projects" onClick={() => setPagination(true)} className="mr-3 cursor-pointer hover:text-purple-800">
                    <i className='bx bx-grid-alt text-gray-400 text-3xl hover:text-purple-800'></i></NavLink>
                <NavLink to="/projects" onClick={() => setPagination(false)} className="cursor-pointer hover:text-purple-800"><i
                    className='bx bx-menu text-gray-400 text-4xl hover:text-purple-800'></i></NavLink>
            </div>
            <div className={pagination?"ml-7 row pl-3 pr-3 ":null}>
                {
                    project.map((project) => (
                        <div key={project.id} className="col-3 mb-3">
                            <div
                                className="
        c-card
        block
        bg-white
        shadow-md
        hover:shadow-xl
        rounded-lg
        overflow-hidden
      "
                            >
                                <img
                                    className="
                                      lg:h-60
                                      xl:h-56
                                      md:h-64
                                      sm:h-72
                                      xs:h-72
                                      h-72
                                      rounded
                                      w-full
                                      object-cover object-center
                                      mb-4
                                    "
                                    src={project.image}
                                    alt=" 720x400"
                                />
                                <ul className="mb-2 ml-2 text-gray-500">
                                    <li><h2 className="uppercase text-1xl  mb-2 text-black ">{project.title}</h2></li>
                                    <li className=""><i className='bx bxs-calendar text-lg mr-2'></i>
                                     {`${project.date1.replace(/-/g, ".")} 
                                  -  ${project.date2?.replace(/-/g, ".")} .гг`}</li>
                                    <li className="font-size"><i className='bx bxs-user-rectangle text-xl mr-2'></i>{project.director}</li>
                                    <li><i className='bx bx-ruble text-xl mr-2'></i>{project.admin}</li>
                                    <div>
                                    </div>
                                </ul>
                                <div className="flex ml-2 mr-2">
                                    <div>
                                        <button
                                            type="button"
                                            className=" mr-2 h-7 w-7 overflow-hidden rounded-full"
                                        >
                                            <img
                                                src={img}
                                                alt="user"
                                            />
                                        </button>
                                    </div>
                                    <div>
                                        <button
                                            type="button"
                                            className=" mr-2 h-7 w-7 overflow-hidden rounded-full"
                                        >
                                            <img
                                                src={user1}
                                                alt="user"
                                            />
                                        </button>
                                    </div>
                                    <div>
                                        <button
                                            type="button"
                                            className=" mr-2 h-7 w-7 overflow-hidden rounded-full"
                                        >
                                            <img
                                                src={user2}
                                                alt="user"
                                            />
                                        </button>
                                    </div>
                                    <div>
                                        <button
                                            type="button"
                                            className=" mr-3 h-7 w-7 overflow-hidden rounded-full"
                                        >
                                            <img
                                                src={user3}
                                                alt="user"
                                            />
                                        </button>
                                    </div>
                                    <div className=" ml-10 flex justify-end">
                                        <div className={ modalActive? null : "load" }></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))
                }


            </div>
        </Layout>
    );
};

export default Project;