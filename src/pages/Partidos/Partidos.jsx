import { useEffect, useState } from 'react';
import {
    PartidosContainer,
    PartidosDropdownContainer,
    PartidosDropdownWrapper,
    PartidosMesesContainer,
    PartidosWrapper,
} from './PartidosStyles';

import { usePartidos, usePartidosAñoMes } from '../../api/partidos/usePartidos';
import { useNavigate, useSearchParams } from 'react-router-dom';
import CardPartido2 from '../../components/Cards/CardPartido2/CardPartido2';
import Dropdown from '../../components/UI/Dropdown/Dropdown';
import useForm from '../../hooks/useForm';

const Partidos = () => {
    // const { data: partidos, error, isLoading } = usePartidos();
    
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const today = new Date();
    const añoActual = today.getFullYear().toString();
    const mesActual = (today.getMonth() + 1).toString(); // getMonth() es 0-indexad
    const añoURL = searchParams.get('año');
    const mesURL = searchParams.get('mes');

    const [añoSeleccionado, setAñoSeleccionado] = useState(añoURL || añoActual);
    const [mesSeleccionado, setMesSeleccionado] = useState(mesURL || mesActual);

    const { data: partidos, error, isLoading } = usePartidosAñoMes(añoSeleccionado, mesSeleccionado);
    
    useEffect(() => {
        if (añoURL) {
            setAñoSeleccionado(añoURL) 
        } else setAñoSeleccionado(añoActual);
        if (mesURL) {
            setMesSeleccionado(mesURL);
        } else setMesSeleccionado(mesActual)
    }, [añoURL, mesURL]);

    const actualizarURL = (año, mes) => {
        const params = new URLSearchParams();
        if (año) params.set('año', año);
        if (mes) params.set('mes', mes);
        navigate({ search: params.toString() });
        // 🔄 Fuerza recarga del componente
        navigate(0); 
    };
    
    const meses = [
        { label: 'Ene', value: '1' },
        { label: 'Feb', value: '2' },
        { label: 'Mar', value: '3' },
        { label: 'Abr', value: '4' },
        { label: 'May', value: '5' },
        { label: 'Jun', value: '6' },
        { label: 'Jul', value: '7' },
        { label: 'Ago', value: '8' },
        { label: 'Sep', value: '9' },
        { label: 'Oct', value: '10' },
        { label: 'Nov', value: '11' },
        { label: 'Dic', value: '12' },
    ];

    const años = [
        { label: '2025', value: '2025' },
        { label: '2024', value: '2024' },
        { label: '2023', value: '2023' },
        { label: '2022', value: '2022' },
        { label: '2021', value: '2021' },
        { label: '2020', value: '2020' },
        { label: '2019', value: '2019' },
        { label: '2018', value: '2018' },
        { label: '2017', value: '2017' },
        { label: '2016', value: '2016' },
        { label: '2015', value: '2015' },
        { label: '2014', value: '2014' },
        { label: '2013', value: '2013' },
        { label: '2012', value: '2012' },
        { label: '2011', value: '2011' },
        { label: '2010', value: '2010' },
        { label: '2009', value: '2009' },
        { label: '2008', value: '2008' },
        { label: '2007', value: '2007' },
        { label: '2006', value: '2006' },
        { label: '2005', value: '2005' },
        { label: '2004', value: '2004' },
        { label: '2003', value: '2003' },
        { label: '2002', value: '2002' },
        { label: '2001', value: '2001' },
        { label: '2000', value: '2000' },
        { label: '1999', value: '1999' },
        { label: '1998', value: '1998' },
        { label: '1997', value: '1997' },
        { label: '1996', value: '1996' },
        { label: '1995', value: '1995' },
        { label: '1994', value: '1994' },
        { label: '1993', value: '1993' },
        { label: '1992', value: '1992' },
        { label: '1991', value: '1991' },
        { label: '1990', value: '1990' },
        { label: '1989', value: '1989' },
        { label: '1988', value: '1988' },
        { label: '1987', value: '1987' },
        { label: '1986', value: '1986' },
        { label: '1985', value: '1985' },
        { label: '1984', value: '1984' },
        { label: '1983', value: '1983' },
        { label: '1982', value: '1982' },
        { label: '1981', value: '1981' },
        { label: '1980', value: '1980' },
        { label: '1979', value: '1979' },
        { label: '1973', value: '1973' },
        { label: '1970', value: '1970' },
    ];


    // const años = [...new Set(partidos?.map(p => p.año))].sort((a, b) => b - a);
    const partidosFiltrados = partidos?.filter((p) => p.año == añoSeleccionado && p.mes == mesSeleccionado)

    // Manejo del form
    const [formState, handleFormChange, resetForm, setFormState] = useForm({ 
        año: añoSeleccionado || '',

    });   


    return (
        <PartidosContainer>
            <PartidosDropdownContainer>
                <PartidosDropdownWrapper>
                    <Dropdown
                        // name="año" // <--- esto es clave
                        value={añoSeleccionado || ""}
                        onChange={(e) => actualizarURL(e.target.value, mesSeleccionado)}
                        options={años}
                        optionLabel="label"
                        optionValue="value"
                    />
                </PartidosDropdownWrapper>
            </PartidosDropdownContainer>
            <PartidosMesesContainer>
                {meses.map((mes) => {
                    const params = new URLSearchParams();
                    if (añoSeleccionado) params.set('año', añoSeleccionado);
                    params.set('mes', mes.value);

                    const isSelected = mesSeleccionado === mes.value;

                    return (
                        <a
                        key={mes.value}
                        href={`?${params.toString()}`}
                        className={isSelected && 'active' }
                        >
                        {mes.label}
                        </a>
                    );
                    })}


            </PartidosMesesContainer>
            <PartidosWrapper>
                {
                    !isLoading && <>
                        {
                            partidosFiltrados?.length > 0 ? <>
                                {partidosFiltrados?.map((partido) => (
                                    <CardPartido2 key={partido.id_partido} partido={partido} />
                                ))}
                            </> : <p>No se encontraron partidos que coincidan con los criterios seleccionados</p>
                        }
                    </>
                }
            </PartidosWrapper>
        </PartidosContainer>
    );
};

export default Partidos;
