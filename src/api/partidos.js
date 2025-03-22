import { URL_API } from "../utils/constants";

export const fetchPartidos = async () => {
    const res = await fetch(`${URL_API}partidos`);
    if (!res.ok) throw new Error("Error al cargar los datos de partidos");
    return res.json();
};

export const fetchPartido = async (id_partido) => {
    const res = await fetch(`${URL_API}partidos/${id_partido}`);
    if (!res.ok) throw new Error("Error al cargar los datos del partido");
    return res.json();
};

export const fetchPartidoAlineaciones = async (id_partido) => {
    const res = await fetch(`${URL_API}partidos/alineaciones/${id_partido}`);
    if (!res.ok) throw new Error("Error al cargar los datos del partido");
    return res.json();
};

export const fetchPartidoGoles = async (id_partido) => {
    const res = await fetch(`${URL_API}partidos/goles/${id_partido}`);
    if (!res.ok) throw new Error("Error al cargar los datos del partido");
    return res.json();
};

export const fetchPartidoIncidencias = async (id_partido) => {
    const res = await fetch(`${URL_API}partidos/incidencias/${id_partido}`);    
    if (!res.ok) throw new Error("Error al cargar los datos del partido");
    return res.json();
};


export const fetchPartidoCambios = async (id_partido) => {
    const res = await fetch(`${URL_API}partidos/cambios/${id_partido}`);    
    if (!res.ok) throw new Error("Error al cargar los datos del partido");
    return res.json();
};
