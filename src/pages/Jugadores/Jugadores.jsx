import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { JugadoresContainer, JugadoresWrapper } from './JugadoresStyles';
import Table from '../../components/Table/Table';
import { columnsJugadores } from '../../Data/dataColumns.jsx';

const Jugadores = () => {
    const [jugadores, setJugadores] = useState([]);

    useEffect(() => {
        const fetchJugadores = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/get-jugadores');
                setJugadores(response.data);
            } catch (error) {
                console.error("Error al obtener los partidos:", error);
            }
        };

        fetchJugadores();
    }, []);


    console.log(jugadores);
    
    return (
        <JugadoresContainer>
            <JugadoresWrapper>
                <Table data={jugadores} dataColumns={columnsJugadores} />
            </JugadoresWrapper>
        </JugadoresContainer>
    );
};

export default Jugadores;
