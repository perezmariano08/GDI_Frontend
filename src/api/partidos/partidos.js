import { URL_API } from "../../utils/constants";
import api from "../axios";

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

export const fetchPartidosAñoMes = async (año, mes) => {
    try {
        const res = await api.get(`/partidos/por-fecha?temporada=${año}&mes=${mes}`);
        return res.data;
    } catch (error) {
        throw new Error("Error al cargar los datos de los partidos");
    }
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


export const fetchPartidoImagenes = async (id_partido) => {
    const res = await fetch(`${URL_API}partidos/imagenes/${id_partido}`);    
    if (!res.ok) throw new Error("Error al cargar los datos del partido");
    return res.json();
};


export const fetchPartidosCampañaPartido = async (id_partido) => {
    const res = await fetch(`${URL_API}partidos/partidos-campania/${id_partido}`);    
    if (!res.ok) throw new Error("Error al cargar los datos del partido");
    return res.json();
};


export const fetchPartidosRival = async (id_equipo) => {
    const res = await fetch(`${URL_API}partidos/historial-rival/${id_equipo}`);    
    if (!res.ok) throw new Error("Error al cargar los datos del partido");
    return res.json();
};
