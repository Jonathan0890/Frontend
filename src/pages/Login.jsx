import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { FaUser } from 'react-icons/fa';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Redirigir si ya está autenticado
        const user = JSON.parse(localStorage.getItem('user'));
        if (user?.loggedIn) {
            navigate('/dashboard');
        }
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        // Validación básica
        if (!email || !password) {
            setError('Todos los campos son requeridos');
            setIsLoading(false);
            return;
        }

        try {
            // Simulación de autenticación (en producción sería una llamada API)
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Credenciales hardcodeadas solo para demo
            if (email === 'admin@creativastudio.com' && password === 'Creativa123') {
                localStorage.setItem('user', JSON.stringify({
                    email,
                    name: 'Administrador',
                    loggedIn: true,
                    avatar: 'A'
                }));

                navigate('/dashboard');
            } else {
                setError('Credenciales incorrectas');
            }
        } catch (err) {
            setError('Error al iniciar sesión. Intente nuevamente.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow flex items-center justify-center bg-[#f5f7fa] p-4">
                <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-[#6c63ff] to-[#4d44db] p-6 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4">
                            <FaUser className="text-[#6c63ff] text-2xl" />
                        </div>
                        <h1 className="text-2xl font-bold text-white">Iniciar Sesión</h1>
                        <p className="text-white/80 mt-1">Acceso al panel administrativo</p>
                    </div>

                    <form onSubmit={handleSubmit} className="p-6 space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-[#2f2e41] mb-1">
                                Correo electrónico
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 border border-[#ddd] rounded-md focus:ring-2 focus:ring-[#6c63ff] focus:border-[#6c63ff]"
                                placeholder="tu@email.com"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-[#2f2e41] mb-1">
                                Contraseña
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 border border-[#ddd] rounded-md focus:ring-2 focus:ring-[#6c63ff] focus:border-[#6c63ff]"
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        {error && (
                            <div className="p-3 bg-[#dc3545]/10 text-[#dc3545] rounded-md text-sm">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full py-3 px-4 rounded-md font-medium text-white transition-colors ${isLoading
                                    ? 'bg-[#6c63ff]/70 cursor-not-allowed'
                                    : 'bg-[#6c63ff] hover:bg-[#4d44db]'
                                }`}
                        >
                            {isLoading ? 'Iniciando sesión...' : 'Acceder'}
                        </button>

                        <div className="text-center text-sm text-[#6c757d]">
                            ¿Problemas para acceder?{' '}
                            <a href="#help" className="text-[#6c63ff] hover:underline">
                                Contactar soporte
                            </a>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Login;