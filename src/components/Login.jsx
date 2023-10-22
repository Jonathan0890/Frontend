import React from 'react';
import './../css/Login.css';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="login-box">
            <form>
                <div className="input-group">
                    <label htmlFor="titulo">Iniciar Sesión</label>
                    <label htmlFor="usuario">Usuario</label>
                    <input type="text" id="usuario" name="usuario" placeholder="Usuario" required />
                </div>
                <div className="input-group">
                    <label htmlFor="contrasena">Contraseña</label>
                    <input type="password" id="contrasena" name="contrasena" placeholder="Contraseña" required />
                </div>
                <button type="submit">Iniciar Sesión</button>
                <div className="registration">
                    <Link to="/Registro">¿Has olivado la contraseña?</Link>
                    <Link to="">¿No tienes una cuenta?</Link>
                </div>
                <div className="social-login">

                    <button type="button" className="google-button">Google</button>
                </div>
            </form>

        </div>
    );
}

export default Login;

