import React from "react";
import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { Formik } from 'formik';
import axios from "axios";
import { useParams } from 'react-router-dom'; //Obtiene el Id de la ruta


export default function IndexUser() {

    const params = useParams()
    // console.log('Este es un parametro '+ params.id)
    console.log(params)
    var id = params.id;
    console.log(id)

    const [User, SetUser] = useState({
        nombre: "",
        apellido: "",
        username: "",
        password: ""
    })

    useEffect(() => {

        const loadUser = async () => {
            const response = await axios.get(`http://localhost:4000/users/${id}`)
            console.log(response);
            SetUser({
                nombre: response.data.nombre,
                apellido: response.data.apellido,
                username: response.data.username,
                password: response.data.password
            })
        };
        loadUser(); //Ejecutar el método buscar usuario
    }, []);

    return (
        <>
            <div className='grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen'>
                <Sidebar />
                <Formik
                    initialValues={User} //Una vez buscado los datos lo va mapear de forma automatica
                    enableReinitialize={true}
                    onSubmit={async (values, actions) => {
                        try{

                        }catch{

                        }
                        console.log(values)

                        var res = await axios.patch(`http://localhost:4000/users/${id}`, values)
                        actions.resetForm()
                            alert('Datos actualizados correctamente')
                        if (res.status == 200) {
                            //Redirecciomar 
                            window.location = '/dashboard';

                        }
                        else {
                            alert("Succedio un error")
                        }

                    }}
                >
                    {({ handleChange, handleSubmit, values, handleBlur }) => (

                        <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-[100vh] overflow-y-scroll">
                            <div>
                                <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-nombre">
                                                Nombre
                                            </label>
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                id="nombre"
                                                name="nombre"
                                                type="text"
                                                placeholder="Ejemplo: Jorge"
                                                onChange={handleChange}
                                                value={values.nombre}
                                                onBlur={handleBlur}
                                            />
                                        </div>
                                        <div className="w-full md:w-1/2 px-3">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-apellido">
                                                Apellido
                                            </label>
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                id="apellido"
                                                name="apellido"
                                                type="text"
                                                placeholder="Ejemplo: Nitales"
                                                onChange={handleChange}
                                                value={values.apellido}
                                                onBlur={handleBlur}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full px-3">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-username">
                                                Username
                                            </label>
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                id="username"
                                                name="username"
                                                type="text"
                                                placeholder="Ejemplo: esotilin"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.username}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full px-3">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                                Contraseña
                                            </label>
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                id="password"
                                                name="password"
                                                type="password"
                                                placeholder="******"
                                                onChange={handleChange}
                                                value={values.password}
                                                onBlur={handleBlur} 
                                                required
                                            />
                                            <p className="text-gray-600 text-xs italic">Mínimo 6 caracteres</p>
                                        </div>
                                    </div>
                                    <br />
                                    <button
                                        type="submit"
                                        className="bg-transparent hover:bg-gray-400 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded"
                                    >
                                        Guardar
                                    </button>
                                </form>
                            </div>
                        </main>
                    )}
                </Formik>
            </div >
        </>
    );
}