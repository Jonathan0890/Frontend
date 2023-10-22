import React from 'react';

const Nosotros = () => {


    const containerStyle = {
        backgroundColor: '#7E57C2',
        color: '#FFFFFF',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    };

    const titleStyle = {
        fontSize: '28px',
        marginBottom: '20px',
    };

    const textContainerStyle = {
        padding: '20px',
        maxWidth: '600px',
        margin: '0 auto',
    };

    const textStyle = {
        fontSize: '16px',
        lineHeight: '1.6',
    };

    const mainStyle = {
        backgroundColor: '#E5CFF7', // Fondo morado suave
        minHeight: '100vh',

    };

    return (
        <div style={mainStyle}>
            <div>
                <div style={containerStyle}>
                    <h1 style={titleStyle}>Sobre Nosotros</h1>
                </div>
                <div style={textContainerStyle}>
                    <p style={textStyle}>
                        Nuestra misión es proporcionar un acceso sencillo a una amplia variedad de películas.
                    </p>
                    <p style={textStyle}>
                        Nuestra visión es convertirnos en la plataforma de elección para entusiastas del cine de todo el mundo.
                    </p>
                    <p style={textStyle}>
                        Contáctenos al 980-000-000 o por nuestro correo Correo@UtCancun.edu.mx
                    </p>
                    <p style={textStyle}>
                        Nuestro equipo está formado por Eduardo Gutiérrez Pacheco, Jonathan Coox Carrillo y Alexis Zamora Gorospe.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Nosotros;