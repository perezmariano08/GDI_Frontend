import React, { useState } from 'react';

const PartidoParser = () => {
  const [inputText, setInputText] = useState('');
  const [alineaciones, setAlineaciones] = useState([]);
  const [error, setError] = useState(null);

  const parsearPartido = () => {
    try {
      const lineas = inputText.split('\n');
      let equipos = [];
      let equipoActual = null;
      let procesandoEquipo = false;
      let esSuplente = false;

      for (let linea of lineas) {
        linea = linea.trim();
        if (!linea) continue;

        // Buscar nombres de equipos (líneas que contienen el nombre y posiblemente (Ciudad))
        if (linea.includes('(') && /\)\s*\d*$/.test(linea)) {
          if (equipoActual) {
            equipos.push({
              nombre: equipoActual.nombre.trim(),
              jugadores: [...equipoActual.jugadores]
            });
          }
          
          // Extraer el nombre del equipo (todo antes del paréntesis)
          const nombreEquipo = linea.split('(')[0].trim();
          equipoActual = {
            nombre: nombreEquipo,
            jugadores: []
          };
          procesandoEquipo = true;
          esSuplente = false;
          continue;
        }

        // Buscar línea de suplentes
        if (linea.startsWith('SUP.:')) {
          esSuplente = true;
          continue;
        }

        // Buscar árbitro o gol (indicador de fin de alineación)
        if (linea.startsWith('Arbitro:') || linea.startsWith('Gol:')) {
          procesandoEquipo = false;
          continue;
        }

        // Procesar jugadores solo si estamos procesando un equipo
        if (procesandoEquipo && equipoActual) {
          // Separar jugadores (pueden estar en la misma línea separados por punto y coma)
          const jugadoresLinea = linea.split(';').map(j => j.trim()).filter(j => j !== '');
          
          for (let jugador of jugadoresLinea) {
            // Procesar sustituciones (jugadores entre paréntesis)
            const sustituciones = jugador.match(/\(.*?\)/g);
            let jugadorPrincipal = jugador;
            
            if (sustituciones) {
              jugadorPrincipal = jugador.split('(')[0].trim();
              
              // Procesar sustituciones
              for (let sustitucion of sustituciones) {
                const subMatch = sustitucion.match(/\d+m\.\s*(.+?)\)/);
                if (subMatch) {
                  equipoActual.jugadores.push({
                    nombre: formatearNombre(subMatch[1]),
                    condicion: 'S'
                  });
                }
              }
            }
            
            if (jugadorPrincipal !== '') {
              equipoActual.jugadores.push({
                nombre: formatearNombre(jugadorPrincipal),
                condicion: esSuplente ? 'C' : 'T'
              });
            }
          }
        }
      }

      // Añadir el último equipo procesado
      if (equipoActual && equipoActual.jugadores.length > 0) {
        equipos.push({
          nombre: equipoActual.nombre.trim(),
          jugadores: [...equipoActual.jugadores]
        });
      }

      // Asignar dorsales
      equipos.forEach(equipo => {
        let dorsal = 1;
        // Primero titulares (T)
        equipo.jugadores.filter(j => j.condicion === 'T').forEach(j => {
          j.dorsal = dorsal++;
          j.equipo = equipo.nombre;
        });
        
        // Luego convocados (C)
        equipo.jugadores.filter(j => j.condicion === 'C').forEach(j => {
          j.dorsal = dorsal++;
          j.equipo = equipo.nombre;
        });
        
        // Finalmente suplentes que entraron (S)
        equipo.jugadores.filter(j => j.condicion === 'S').forEach(j => {
          j.dorsal = dorsal++;
          j.equipo = equipo.nombre;
        });
      });

      setAlineaciones(equipos.flatMap(equipo => equipo.jugadores));
      setError(null);
    } catch (err) {
      setError('Error al procesar el texto. Asegúrate de que el formato sea correcto.');
      console.error(err);
    }
  };

  const formatearNombre = (nombreCompleto) => {
    // Eliminar números y otros caracteres no deseados
    nombreCompleto = nombreCompleto.replace(/\d/g, '').replace(/\./g, '').trim();
    
    // Convertir "Nombre Apellido" a "Apellido, Nombre"
    const partes = nombreCompleto.split(' ').filter(p => p !== '');
    if (partes.length < 2) return nombreCompleto;
    
    const apellido = partes[partes.length - 1];
    const nombres = partes.slice(0, -1).join(' ');
    
    return `${apellido}, ${nombres}`;
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Procesador de Alineaciones de Fútbol</h1>
      <div>
        <textarea 
          value={inputText} 
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Pega aquí el texto del partido..."
          style={{ width: '100%', height: '300px', marginBottom: '10px' }}
        />
      </div>
      <button onClick={parsearPartido}>Procesar Partido</button>
      
      {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
      
      {alineaciones.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h2>Alineaciones Generadas</h2>
          <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th>Dorsal</th>
                <th>Jugador</th>
                <th>Condición</th>
                <th>Equipo</th>
              </tr>
            </thead>
            <tbody>
              {alineaciones.map((jugador, index) => (
                <tr key={index}>
                  <td>{jugador.dorsal}</td>
                  <td>{jugador.nombre}</td>
                  <td>{jugador.condicion === 'T' ? 'Titular' : jugador.condicion === 'C' ? 'Convocado' : 'Suplente'}</td>
                  <td>{jugador.equipo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PartidoParser;