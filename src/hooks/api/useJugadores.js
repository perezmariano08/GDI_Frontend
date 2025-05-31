import { useQuery } from '@tanstack/react-query';
import { fetchJugador, fetchJugadores, fetchJugadorEstadisticas } from '../../api/jugadores';

export const useJugadores = () => {
    return useQuery({
        queryKey: ["jugadores"],
        queryFn: fetchJugadores,
        staleTime: 1000 * 60 * 5, // Caché de 5 minutos
    });
};

export const useJugador = (id_jugador) => {
    return useQuery({
        queryKey: ["jugador", id_jugador], // Clave única por partido
        queryFn: () => fetchJugador(id_jugador),
        enabled: !!id_jugador, // No ejecuta la consulta si id_partido es undefined
        staleTime: 1000 * 60 * 5, // Caché de 5 minutos
    });
};

export const useJugadorEstadisticas = (id_jugador) => {
    return useQuery({
        queryKey: ["jugadorEstadisticas", id_jugador], // Clave única por partido
        queryFn: () => fetchJugadorEstadisticas(id_jugador),
        enabled: !!id_jugador, // No ejecuta la consulta si id_partido es undefined
        staleTime: 1000 * 60 * 5, // Caché de 5 minutos
    });
};
