import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
    const [usuario, setUsuario] = useState(null);
    const [reservas, setReservas] = useState([]);

    const entrar = (nombre, correo) => setUsuario({ nombre, correo });
    const salir = () => {
        setUsuario(null);
        setReservas([]);
    };

    const reservar = (clase, horario) => {
        setReservas((prev) => [
            ...prev,
            { id: Date.now().toString(), clase, horario },
        ]);
    };

    const cancelar = (id) =>
        setReservas((prev) => prev.filter((r) => r.id !== id));

    return (
        <AppContext.Provider
            value={{ usuario, reservas, entrar, salir, reservar, cancelar }}
        >
            {children}
        </AppContext.Provider>
    );
}

export const useApp = () => useContext(AppContext);