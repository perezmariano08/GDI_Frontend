import React from 'react';
import { Column } from 'primereact/column';
import { TableContainerStyled } from './TableStyles';

const Table = ({ data, dataColumns }) => {
    return (
        <TableContainerStyled 
            value={data} 
            removableSort 
            paginator 
            rows={50} 
            rowsPerPageOptions={[5, 10, 25, 50, 100]} 
            emptyMessage="No hay datos disponibles" 
            stripedRows
        >
            {dataColumns.map((col) => (
                <Column 
                    key={col.field} 
                    field={col.field} 
                    header={col.header} 
                    sortable={col.sortable} 
                    body={col.body} 
                />
            ))}
        </TableContainerStyled>
    );
};

export default Table;
