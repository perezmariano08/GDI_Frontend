import { useQuery } from '@tanstack/react-query';
import { fetchPartidoGoles } from '../../../api/partidos';

export const usePartidoGoles = (id_partido) => {
    return useQuery({
        queryKey: ["partidoGoles", id_partido], // Clave única por partido
        queryFn: () => fetchPartidoGoles(id_partido),
        enabled: !!id_partido, // No ejecuta la consulta si id_partido es undefined
        staleTime: 1000 * 60 * 5, // Caché de 5 minutos
    });
};
