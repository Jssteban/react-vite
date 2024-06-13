/**
 * Componente funcional BadgesImg en React.
 * 
 * Este componente renderiza un enlace que contiene una imagen si se proporciona una URL de imagen (props.src).
 * Utiliza Tailwind CSS para el estilizado del enlace y la imagen.
 * 
 * @param {Object} props - Las propiedades que se pasan al componente.
 * @param {string} props.href - La URL a la que apunta el enlace.
 * @param {string} [props.src] - La URL de la imagen para el badge. Si no se proporciona, no se renderiza ninguna imagen.
 * 
 * @returns {JSX.Element} Un elemento JSX que representa un enlace estilizado que contiene una imagen opcional.
 */
const BadgesImg = (props) => {
    // Define una cadena de clases CSS base que se aplicarán al elemento <a>.
    const base = "bg-primary text-secondary rounded-full overflow-hidden w-32 h-32";
    
    // Retorna el JSX que define la estructura del componente.
    return (
        // Utiliza un fragmento de React vacío para encapsular el contenido sin añadir un nodo adicional al DOM.
        <>
            {/*
                Crea un enlace <a> con las siguientes propiedades:
                - href: se establece en el valor de props.href, lo que define la URL a la que el enlace apunta.
                - className: se establece en la cadena de clases CSS definida en la constante 'base'.
            */}
            <a href={props.href} className={`${base}`}>
                {/*
                    Renderiza una imagen <img> dentro del enlace solo si props.src está definido.
                    - className: aplica clases CSS para asegurar que la imagen ocupe todo el espacio del contenedor.
                    - src: establece la URL de la imagen.
                    - alt: proporciona un texto alternativo para la imagen.
                */}
                {props.src && <img className="h-full w-full" src={props.src || ""} alt="imagen" />}
            </a>
        </>
    );
}

// Exporta el componente BadgesImg como el valor por defecto del módulo, permitiendo que se importe y use en otros archivos.
export default BadgesImg;
