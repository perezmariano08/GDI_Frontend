import { useQuery } from '@tanstack/react-query';
import { fetchPartidoAlineaciones } from '../../../api/partidos';

export const usePartidoAlineaciones = (id_partido) => {
    return useQuery({
        queryKey: ["partidoAlineaciones", id_partido], // Clave única por partido
        queryFn: () => fetchPartidoAlineaciones(id_partido),
        enabled: !!id_partido, // No ejecuta la consulta si id_partido es undefined
        staleTime: 1000 * 60 * 5, // Caché de 5 minutos
    });
};
