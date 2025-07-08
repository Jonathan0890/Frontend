import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import DashboardHeader from '../components/DashboardHeader';
import Sidebar from '../components/Sidebar';
import StatCard from '../components/StartCard';
import Footer from '../components/Footer';
import {
    FaEnvelopeOpenText,
    FaProjectDiagram,
    FaCheckCircle,
    FaEnvelope,
    FaSearch
} from 'react-icons/fa';

const Dashboard = () => {
    const [leads, setLeads] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // Verificar autenticación
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user?.loggedIn) {
            navigate('/login');
            return;
        }

        // Simular carga de datos
        const loadData = async () => {
            setIsLoading(true);
            try {
                await new Promise(resolve => setTimeout(resolve, 1000));

                const sampleLeads = [
                    {
                        id: 1,
                        nombre: "Ana López",
                        email: "ana@ejemplo.com",
                        telefono: "555-1234",
                        mensaje: "Interesado en diseño de logo",
                        fecha: "2023-05-15",
                        estado: "nuevo"
                    },
                    {
                        id: 2,
                        nombre: "Carlos Méndez",
                        email: "carlos@empresa.com",
                        telefono: "555-5678",
                        mensaje: "Cotización para sitio web",
                        fecha: "2023-05-14",
                        estado: "contactado"
                    },
                    {
                        id: 3,
                        nombre: "María González",
                        email: "maria@tienda.com",
                        telefono: "555-9012",
                        mensaje: "Diseño de catálogo digital",
                        fecha: "2023-05-10",
                        estado: "nuevo"
                    },
                    {
                        id: 4,
                        nombre: "Juan Pérez",
                        email: "juan@servicios.com",
                        telefono: "555-3456",
                        mensaje: "Rediseño de identidad corporativa",
                        fecha: "2023-05-08",
                        estado: "contactado"
                    }
                ];

                setLeads(sampleLeads);
            } catch (error) {
                console.error("Error cargando datos:", error);
            } finally {
                setIsLoading(false);
            }
        };

        loadData();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/');
    };

    const changeStatus = (id, newStatus) => {
        setLeads(leads.map(lead =>
            lead.id === id ? { ...lead, estado: newStatus } : lead
        ));
    };

    const filteredLeads = leads.filter(lead =>
        lead.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.estado.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen flex flex-col bg-[#f8f9fa]">
            <Header />
            <DashboardHeader />

            <div className="flex-grow container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-8">
                    <Sidebar />

                    <main className="bg-white rounded-xl shadow-sm overflow-hidden">
                        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-[#eee]">
                            <StatCard
                                icon={<FaEnvelopeOpenText className="text-4xl text-[#6c63ff] mb-3" />}
                                title="Nuevos mensajes"
                                value="12"
                            />
                            <StatCard
                                icon={<FaProjectDiagram className="text-4xl text-[#6c63ff] mb-3" />}
                                title="Proyectos activos"
                                value="5"
                            />
                            <StatCard
                                icon={<FaCheckCircle className="text-4xl text-[#6c63ff] mb-3" />}
                                title="Proyectos completados"
                                value="24"
                            />
                        </div>

                        <div className="p-6">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
                                <h2 className="text-xl font-semibold text-[#2f2e41] flex items-center">
                                    <FaEnvelope className="text-[#6c63ff] mr-2" />
                                    Últimos mensajes
                                </h2>

                                <div className="relative max-w-xs w-full">
                                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6c757d]" />
                                    <input
                                        type="text"
                                        placeholder="Buscar leads..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="pl-10 pr-4 py-2 w-full border border-[#ddd] rounded-md focus:ring-2 focus:ring-[#6c63ff] focus:border-[#6c63ff]"
                                    />
                                </div>
                            </div>

                            {isLoading ? (
                                <div className="flex justify-center items-center py-12">
                                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#6c63ff]"></div>
                                </div>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-[#eee]">
                                        <thead className="bg-[#f8f9fa]">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-[#6c757d] uppercase tracking-wider">
                                                    Nombre
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-[#6c757d] uppercase tracking-wider">
                                                    Email
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-[#6c757d] uppercase tracking-wider">
                                                    Teléfono
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-[#6c757d] uppercase tracking-wider">
                                                    Mensaje
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-[#6c757d] uppercase tracking-wider">
                                                    Fecha
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-[#6c757d] uppercase tracking-wider">
                                                    Estado
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-[#6c757d] uppercase tracking-wider">
                                                    Acciones
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-[#eee]">
                                            {filteredLeads.length > 0 ? (
                                                filteredLeads.map(lead => (
                                                    <tr key={lead.id} className="hover:bg-[#f8f9fa]">
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#2f2e41]">
                                                            {lead.nombre}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#6c63ff]">
                                                            {lead.email}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#2f2e41]">
                                                            {lead.telefono}
                                                        </td>
                                                        <td className="px-6 py-4 text-sm text-[#2f2e41] max-w-xs truncate">
                                                            {lead.mensaje}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#6c757d]">
                                                            {new Date(lead.fecha).toLocaleDateString()}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${lead.estado === 'nuevo'
                                                                    ? 'bg-blue-100 text-blue-800'
                                                                    : lead.estado === 'contactado'
                                                                        ? 'bg-green-100 text-green-800'
                                                                        : 'bg-gray-100 text-gray-800'
                                                                }`}>
                                                                {lead.estado}
                                                            </span>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#2f2e41]">
                                                            <select
                                                                value={lead.estado}
                                                                onChange={(e) => changeStatus(lead.id, e.target.value)}
                                                                className="border border-[#ddd] rounded px-3 py-1 text-sm focus:ring-2 focus:ring-[#6c63ff] focus:border-[#6c63ff]"
                                                            >
                                                                <option value="nuevo">Nuevo</option>
                                                                <option value="contactado">Contactado</option>
                                                                <option value="descartado">Descartado</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="7" className="px-6 py-4 text-center text-sm text-[#6c757d]">
                                                        No se encontraron resultados
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </main>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Dashboard;