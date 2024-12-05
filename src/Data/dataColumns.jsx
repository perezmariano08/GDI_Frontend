import { TableNombreCompleto } from "../components/Table/TableStyles";

export const columnsJugadores = [
    { 
        header: 'Nombre',
        sortable: true,
        field: 'apellido',
        body: (jugador) => (
            <TableNombreCompleto>
                <span>{jugador.apellido}</span>
                , {jugador.nombre}
            </TableNombreCompleto>
        )
    },
    // Puedes añadir otras columnas aquí
];
