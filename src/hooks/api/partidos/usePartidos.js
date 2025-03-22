import { useQuery } from '@tanstack/react-query';
import { fetchPartidoCambios, fetchPartidoIncidencias, fetchPartidos } from '../../../api/partidos';

export const usePartidos = () => {
    return useQuery({
        queryKey: ["partidos"],
        queryFn: fetchPartidos,
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
