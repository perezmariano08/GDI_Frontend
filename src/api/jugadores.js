import { URL_API } from "../utils/constants";

export const fetchJugadores = async () => {
    const res = await fetch(`${URL_API}jugadores`);
    if (!res.ok) throw new Error("Error al cargar los datos de jugadores");
    return res.json();
};

export const fetchJugador = async (id_jugador) => {
    const res = await fetch(`${URL_API}jugadores/${id_jugador}`);
    if (!res.ok) throw new Error("Error al cargar los datos del jugador");
    return res.json();
};