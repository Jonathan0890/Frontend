import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function Dashboards() {

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:3000/users');
            setUsers(response.data);
            console.log('Datos de la API');
            console.log(response);
        } catch (error) {
            console.error('Error al obtener datos:', error);
        }
    };

    // Función eliminar
    const HandeDelete = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:3000/users/${id}`);
            if (response.status === 200) {
                alert('Se borró correctamente');
            } else {
                alert('¡Ocurrió un error!');
            }
            fetchUsers();
        } catch (error) {
            console.error('Error al eliminar usuario:', error);
        }
    };
    //funcion navegar

    const navigate = useNavigate()

    const [Users, setUsers] = useState([]);
    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className='grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen'>
            
            <main className='lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-[100vh] overflow-y-scroll'>
                <br />
                <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'></section>
                <div className='p-4 sm:ml-50'>
                    <div className='p-20 border-dashed'>
                        <div className='flex items-center justify-center h-48 mb-4 rounded'>
                            <div className='container'>
                                <div className='relative  left-70 top-24'>
                                    <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                                        <thead className='text-xs text-gray-900 uppercase dark:bg-gray-700 dark:text-gray-400'>
                                            <tr>
                                                <th scope='col' className='px-6 py-3'>
                                                    #
                                                </th>
                                                <th scope='col' className='px-6 py-3'>
                                                    Nombre
                                                </th>
                                                <th scope='col' className='px-6 py-3'>
                                                    Apellido
                                                </th>
                                                <th scope='col' className='px-6 py-3'>
                                                    UserName
                                                </th>
                                                <th scope='col' className='px-6 py-3'>
                                                    Password
                                                </th>
                                                <th scope='col' className='px-6 py-3'>
                                                    Editar
                                                </th>
                                                <th scope='col' className='px-6 py-3'>
                                                    Eliminar
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Users.map((users, i) => (
                                                <tr className='border-b dark:border-gray-700' key={i}>
                                                    <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                                                        {i + 1}
                                                    </th>
                                                    <td className='px-6 py-4'>{users.nombre}</td>
                                                    <td className='px-6 py-4'>{users.apellido}</td>
                                                    <td className='px-6 py-4'>{users.username}</td>
                                                    <td className='px-6 py-4'>{users.password}</td>
                                                    <td className='px-6 py-4'>
                                                        <button className='font-medium text-blue-600 dark:text-blue-500 hover:underline' onClick={() => navigate(`/editUsersForm/${users.id}`)}>
                                                            Editar
                                                        </button>
                                                    </td>
                                                    <td className='px-6 py-4'>
                                                        <button className='font-medium text-blue-600 dark:text-blue-500 hover:underline' onClick={() => HandeDelete(users.id)}>
                                                            Eliminar
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}