import { useQuery } from '@tanstack/react-query';
import { fetchPartido, fetchPartidoAlineaciones, fetchPartidoCambios, fetchPartidoIncidencias, fetchPartidos } from '../../api/partidos';

export const usePartidos = () => {
    return useQuery({
        queryKey: ["partidos"],
        queryFn: fetchPartidos,
        staleTime: 1000 * 60 * 5, // Caché de 5 minutos
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

export const usePartidoGoles = (id_partido) => {
    return useQuery({
        queryKey: ["partidoGoles", id_partido], // Clave única por partido
        queryFn: () => fetchPartidoGoles(id_partido),
        enabled: !!id_partido, // No ejecuta la consulta si id_partido es undefined
        staleTime: 1000 * 60 * 5, // Caché de 5 minutos
    });
};
