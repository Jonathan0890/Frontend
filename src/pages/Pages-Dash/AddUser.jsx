import React from "react";
import Sidebar from "../components/Sidebar";
import { Formik } from 'formik';
import axios from "axios";

export default function AddUser() {
    return (
        <>
            <div className='grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen'>
                <Sidebar />
                <Formik
                    initialValues={{
                        nombre: "",
                        apellido: "",
                        username: "",
                        password: ""
                    }}
                    // VER LOS VALORES QUE AGREGA EL USUARIO
                    onSubmit={async (values, actions) => {
                        try {//Maldito try-catch, ese era el error.
                            console.log(values);

                            const res = await axios.post('http://localhost:4000/users', values);

                            actions.resetForm();
                            alert('Datos agregados correctamente');
                            window.location = '/dashboard';
                        } catch (error) {
                            console.error('Error al enviar los datos:', error);
                        }
                    }}
                >
                    {({ handleChange, handleSubmit, values }) => (
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
                                                id="grid-nombre"
                                                name="nombre"
                                                type="text"
                                                placeholder="Ejemplo: Jorge"
                                                onChange={handleChange}
                                                value={values.nombre}
                                                required
                                            />
                                        </div>
                                        <div className="w-full md:w-1/2 px-3">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-apellido">
                                                Apellido
                                            </label>
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                id="grid-apellido"
                                                name="apellido"
                                                type="text"
                                                placeholder="Ejemplo: Nitales"
                                                onChange={handleChange}
                                                value={values.apellido}
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
                                                id="grid-username"
                                                name="username"
                                                type="text"
                                                placeholder="Ejemplo: esotilin"
                                                onChange={handleChange}
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
                                                id="grid-password"
                                                name="password"
                                                type="password"
                                                placeholder="******"
                                                onChange={handleChange}
                                                value={values.password}
                                            />
                                            <p className="text-gray-600 text-xs italic">Mínimo 6 caracteres</p>
                                        </div>
                                    </div>
                                    <br />
                                    <button
                                        type="submit"
                                        className="bg-transparent hover:bg-gray-400 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded"
                                    >
                                        Agregar
                                    </button>
                                </form>
                            </div>
                        </main>
                    )}
                </Formik>
            </div>
        </>
    );
}