import React from "react";
import { Link } from 'react-router-dom';
import './../css/Registro.css';

function Registro() {
    return (
        <div className="register-box">
            <form>
                <div className="input-group">
                    <label htmlFor="titulo">Registro</label>
                    <label htmlFor="usuario">Usuario</label>
                    <input type="text" id="usuario" name="usuario" placeholder="Usuario" required />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input type="email" id="email" name="email" placeholder="Correo Electrónico" required />
                </div>
                <div className="input-group">
                    <label htmlFor="contrasena">Contraseña</label>
                    <input type="password" id="contrasena" name="contrasena" placeholder="Contraseña" required />
                </div>
                <button type="submit">Registrarse</button>
                <div className="registration">
                    <p>¿Ya tienes una cuenta? <Link to="/Login">Iniciar Sesión</Link></p>
                </div>
            </form>
        </div>
    )
}

export default Registro;