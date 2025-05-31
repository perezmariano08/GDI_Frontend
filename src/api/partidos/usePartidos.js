import { useQuery } from '@tanstack/react-query';
import { fetchPartido, fetchPartidoAlineaciones, fetchPartidoCambios, fetchPartidoImagenes, fetchPartidoIncidencias, fetchPartidos, fetchPartidosAñoMes, fetchPartidosCampañaPartido, fetchPartidosRival } from './partidos';

export const usePartidos = () => {
    return useQuery({
        queryKey: ["partidos"],
        queryFn: fetchPartidos,
        staleTime: 1000 * 60 * 0.5, // Caché de 5 minutos
    });
};

export const usePartido = (id_partido) => {
    return useQuery({
        queryKey: ["partido", id_partido], // Clave única por partido
        queryFn: () => fetchPartido(id_partido),
        enabled: !!id_partido, // No ejecuta la consulta si id_partido es undefined
        staleTime: 1000 * 60 * 5, // Caché de 5 minutos
    });
};

export const usePartidosIncidencias = (id_partido) => {
    return useQuery({
        queryKey: ["partidoIncidencias", id_partido], // Clave única por partido
        queryFn: () => fetchPartidoIncidencias(id_partido),
        staleTime: 1000 * 60 * 5, // Caché de 5 minutos
    });
};

export const usePartidoCambios = (id_partido) => {
    return useQuery({
        queryKey: ["partidoCambios", id_partido], // Clave única por partido
        queryFn: () => fetchPartidoCambios(id_partido),
        staleTime: 1000 * 60 * 5, // Caché de 5 minutos
    });
};

export const usePartidoAlineaciones = (id_partido) => {
    return useQuery({
        queryKey: ["partidoAlineaciones", id_partido], // Clave única por partido
        queryFn: () => fetchPartidoAlineaciones(id_partido),
        enabled: !!id_partido, // No ejecuta la consulta si id_partido es undefined
        staleTime: 1000 * 60 * 5, // Caché de 5 minutos
    });
};

export const usePartidoImagenes = (id_partido) => {
    return useQuery({
        queryKey: ["partidoImagenes", id_partido], // Clave única por partido
        queryFn: () => fetchPartidoImagenes(id_partido),
        enabled: !!id_partido, // No ejecuta la consulta si id_partido es undefined
        staleTime: 1000 * 60 * 5, // Caché de 5 minutos
    });
};

export const usePartidoCampañaPartidos = (id_partido) => {
    return useQuery({
        queryKey: ["partidoCampañaPartidos", id_partido], // Clave única por partido
        queryFn: () => fetchPartidosCampañaPartido(id_partido),
        enabled: !!id_partido, // No ejecuta la consulta si id_partido es undefined
        staleTime: 1000 * 60 * 5, // Caché de 5 minutos
    });
};

export const usePartidosRival = (id_equipo) => {
    return useQuery({
        queryKey: ["partidosRival", id_equipo], // Clave única por partido
        queryFn: () => fetchPartidosRival(id_equipo),
        enabled: !!id_equipo, // No ejecuta la consulta si id_partido es undefined
        staleTime: 1000 * 60 * 5, // Caché de 5 minutos
    });
};

export const usePartidosAñoMes = (año, mes) => {
    return useQuery({
        queryKey: ["partidosAñoMes", año, mes], // Clave única por partido
        queryFn: () => fetchPartidosAñoMes(año, mes),
        enabled: !!año, // No ejecuta la consulta si id_partido es undefined
        staleTime: 1000 * 60 * 5, // Caché de 5 minutos
    });
};

