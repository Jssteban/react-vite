/**
 * Componente funcional Badge en React.
 * 
 * Este componente renderiza un enlace (<a>) con estilos específicos y contenido dinámico
 * basado en las propiedades (props) que se le pasan.
 * 
 * @param {Object} props - Las propiedades que se pasan al componente.
 * @param {string} props.href - La URL a la que apunta el enlace.
 * @param {string} [props.name] - El texto que se muestra dentro del enlace. Si no se proporciona, se mostrará una cadena vacía.
 * 
 * @returns {JSX.Element} Un elemento JSX que representa un enlace con estilos y contenido dinámicos.
 */
const Badge = (props) => {
    // Definición de una cadena de clases CSS base para el componente.
    const base = "bg-primary text-secondary px-4 py-2 rounded-full";
    
    return (
        <>
            {/* 
                Renderiza un enlace (<a>) con las siguientes características:
                - href: se establece en el valor de props.href, lo que define la URL a la que el enlace apuntará.
                - className: se establece en la cadena de clases CSS definida en la constante 'base'.
                - El contenido del enlace es el valor de props.name o una cadena vacía si props.name no está definido.
            */}
            <a href={props.href} className={`${base}`}>
                {props.name || ""}
            </a> 
        </>
    );
};

// Exporta el componente Badge como el valor por defecto del módulo.
export default Badge;
