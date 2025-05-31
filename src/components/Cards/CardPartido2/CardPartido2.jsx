import { CardPartidoBotones, CardPartidoContainer, CardPartidoDetalles, CardPartidoDetallesBottom, CardPartidoDetallesTop, CardPartidoDetallesWrapper, CardPartidoEquipoGoles, CardPartidoEquiposWrapper, CardPartidoEquipoWrapper } from './CardPartido2Styles'
import { URL_IMAGES } from '../../../utils/constants'
import { formatearSlugPartido } from '../../../utils/utils'

const CardPartido2 = ({partido}) => {
    
    return (
        <CardPartidoContainer>
            <CardPartidoDetallesWrapper>
                {
                    partido?.condicion === "V" ? <img src={`${URL_IMAGES}/escudos/${partido.escudo_local}`} /> : <img src={`${URL_IMAGES}/escudos/${partido.escudo_visita}`} />
                }
                <CardPartidoDetalles>
                    <CardPartidoDetallesTop>
                        <p>{partido.dia_formateado}</p>
                        <CardPartidoEquiposWrapper>
                            <CardPartidoEquipoWrapper className={partido.condicion !== "V" && "iacc"}>
                                <h2>{partido.equipo_local}</h2>
                                <CardPartidoEquipoGoles>
                                    <p>
                                        {partido.goles_local}
                                        {partido.penales_local && <span>({partido.penales_local})</span>}
                                    </p>                                 
                                </CardPartidoEquipoGoles>
                            </CardPartidoEquipoWrapper>
                            <CardPartidoEquipoWrapper className={partido.condicion === "V" && "iacc"}>
                                <h2>{partido.equipo_visita}</h2>
                                <CardPartidoEquipoGoles>
                                    <p>
                                        {partido.goles_visita}
                                        {partido.penales_visita && <span>({partido.penales_visita})</span>}
                                    </p>                                 
                                </CardPartidoEquipoGoles>
                            </CardPartidoEquipoWrapper>
                        </CardPartidoEquiposWrapper>
                    </CardPartidoDetallesTop>
                    <CardPartidoDetallesBottom>
                        <p>{partido.estadio}</p>
                        <span>{partido.torneo}</span>
                    </CardPartidoDetallesBottom>
                </CardPartidoDetalles>
            </CardPartidoDetallesWrapper>
            <CardPartidoBotones>
                <a href={`/partidos/${formatearSlugPartido(partido.equipo_local, partido.equipo_visita)}/${partido.id_partido}`}>
                    ficha del partido
                </a>    
            </CardPartidoBotones>
        </CardPartidoContainer>
    )
}

export default CardPartido2