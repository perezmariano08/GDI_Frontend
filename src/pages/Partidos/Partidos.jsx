import React, { useState } from 'react'
import { EquipoBodyTemplate, PartidosContainer, PartidosDataTable, PartidosWrapper, ResultadoBodyTemplate } from './PartidosStyles'
import { usePartidos } from '../../hooks/api/usePartidos';
import { Column } from 'primereact/column';
import { FilterMatchMode } from 'primereact/api';
import { URL_IMAGES } from '../../utils/constants';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const Partidos = () => {
    const { data: partidos, error, isLoading } = usePartidos();
    const navigate = useNavigate();  // Hook para la navegación

    const [filters, setFilters] = useState({
        nombre_equipo: { value: null, matchMode: FilterMatchMode.CONTAINS },
        dia_formateado: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        temporada: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        resultado: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        condicion: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        estadio: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });

    const [globalFilterValue, setGlobalFilterValue] = useState('');

    const columns = [
        { 
            field: 'dia_formateado', 
            header: 'Día', 
            body: (rowData) => <span>{rowData.dia_formateado}</span> 
        },
        { 
            field: 'temporada', 
            header: 'Temporada', 
            body: (rowData) => <span>{rowData.temporada}</span> 
        },
        { 
            field: 'condicion', 
            header: 'Condición', 
            body: (rowData) => <span>{rowData.condicion}</span> 
        },
        {
            field: 'resultado',
            header: '',
            body: (rowData) => {
                // Determina la clase según el resultado
                const resultadoClass = rowData.goles_iacc > rowData.goles_rival 
                    ? 'ganado' 
                    : rowData.goles_iacc === rowData.goles_rival 
                        ? 'empate' 
                        : 'perdido';
        
                return (
                    <ResultadoBodyTemplate>
                        <div className={`${resultadoClass}`}>
                            {rowData.resultado}
                        </div>
                    </ResultadoBodyTemplate>
                );
            },
            style: { 
                maxWidth: '100px',
            },
        },
        { 
            field: 'nombre_equipo', 
            header: 'Rival', 
            body: (rowData) => <EquipoBodyTemplate>
                <img src={`${URL_IMAGES}escudos/${rowData.escudo}`} />
                {rowData.nombre_equipo}
            </EquipoBodyTemplate>,
            bodyStyle: { textAlign: 'center', whiteSpace: 'nowrap' }, // Ajusta el ancho al contenido
            style: { minWidth: '250px' } // Permite que la columna tome solo el espacio necesario
        },
        { 
            field: 'estadio', 
            header: 'Estadio', 
            body: (rowData) => <span>{rowData.estadio}</span>,
            style: { 
                minWidth: '400px',
            },
        },
    ];

    // Función para manejar el clic en la fila
    const handleRowClick = (rowData) => {
        // Navegar a la página de detalles del partido
        navigate(`/partidos/${rowData.ruta_equipos}/${rowData.id_partido}`);
    };

    return (
        <PartidosContainer>
            <PartidosWrapper>
                {/* Muestra un mensaje de carga o error sin salir de la función */}
                {error && <p>Error: {error.message}</p>}

                {!error && (
                    <>
                        <PartidosDataTable
                            scrollable 
                            scrollWidth="400px"
                            dataKey="id_partido"
                            emptyMessage="No se encontraron partidos."
                            removableSort
                            loading={isLoading}
                            paginator 
                            rows={100} 
                            filters={filters}
                            globalFilterFields={['nombre_equipo', 'dia_formateado']} 
                            filterDisplay="row" 
                            rowsPerPageOptions={[100, 200, 500]} 
                            value={partidos} 
                            onRowClick={(e) => handleRowClick(e.data)} // Añadir el evento onRowClick
                        >
                            {columns.map((col) => (
                                <Column
                                    filter
                                    bodyStyle={col.bodyStyle}
                                    style={col.style}
                                    // filterPlaceholder="Buscar rival"
                                    sortable={col.sortable} 
                                    key={col.field} 
                                    field={col.field}
                                    header={col.header}
                                    body={col.body} 
                                />
                            ))}
                        </PartidosDataTable>
                    </>
                )}
            </PartidosWrapper>
        </PartidosContainer>
    );
};

export default Partidos;
