export const removerAcentos = (str) => {
    return str
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Elimina acentos
        .replace(/[()'"“”‘’``]/g, "") // Elimina paréntesis y comillas
        .replace(/\s+/g, " ") // Reemplaza múltiples espacios por uno solo
        .trim(); // Elimina espacios al inicio y al final
};



export const formatearSlugJugador = (nombre, apellido) => {
    const cleanNombre = removerAcentos(nombre.toLowerCase());
    const cleanApellido = removerAcentos(apellido.toLowerCase());
    // Obtener solo la primera palabra del nombre
    const primerNombre = cleanNombre.split(" ")[0];
    // Convertir a slug con guiones
    const nombreSlug = primerNombre;
    const apellidoSlug = cleanApellido.split(" ").join("-");

    return `${apellidoSlug}-${nombreSlug}`;
};

export const formatearSlugPartido = (local, visita) => {
    const cleanLocal = removerAcentos(local.toLowerCase());
    const cleanVisita = removerAcentos(visita.toLowerCase());

    const localSlug = cleanLocal.split(" ").join("-");
    const visitaSlug = cleanVisita.split(" ").join("-");

    return `${localSlug}-vs-${visitaSlug}`;
};

export const formatearSlugEquipo = (equipo) => {
    const cleanEquipo = removerAcentos(equipo.toLowerCase());

    const equipoSlug = cleanEquipo.split(" ").join("-");

    return `${equipoSlug}`;
};