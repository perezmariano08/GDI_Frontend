import { useQuery } from '@tanstack/react-query';
import { fetchPartido } from '../../../api/partidos';

export const usePartido = (id_partido) => {
    return useQuery({
        queryKey: ["partido", id_partido], // Clave única por partido
        queryFn: () => fetchPartido(id_partido),
        enabled: !!id_partido, // No ejecuta la consulta si id_partido es undefined
        staleTime: 1000 * 60 * 5, // Caché de 5 minutos
    });
};
