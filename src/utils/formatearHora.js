export function formatearHora(horaISO) {
    // Dividir la cadena en horas, minutos y segundos
    const [hora, minutos, segundos] = horaISO.split(':');

    // Retornar solo hora y minutos
    return `${hora}:${minutos}`;
}
