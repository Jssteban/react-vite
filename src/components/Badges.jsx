/**
 * Componente funcional Badges en React.
 * 
 * Este componente renderiza un conjunto de elementos basado en las propiedades (props) que se le pasan.
 * Dependiendo de si la propiedad `img` es verdadera o no, renderiza una lista de componentes `BadgesImg` o `Badge`.
 * 
 * @param {Object} props - Las propiedades que se pasan al componente.
 * @param {boolean} props.img - Determina si se deben renderizar componentes `BadgesImg` (si es true) o `Badge` (si es false).
 * @param {Array} props.data - Un array de objetos que contienen los datos para cada badge.
 * @param {string} props.data[].href - La URL a la que apunta cada badge.
 * @param {string} [props.data[].name] - El texto que se muestra dentro de cada badge (usado solo si `img` es false).
 * @param {string} [props.data[].src] - La URL de la imagen para cada badge (usado solo si `img` es true).
 * 
 * @returns {JSX.Element} Un elemento JSX que representa una lista de badges con imágenes o texto, según la propiedad `img`.
 */
import Badge from "./Badge";
import BadgesImg from "./BadgesImg";

const Badges = (props) => {
    return (
        props.img ? (
            <>
                <div className="w-full flex justify-center items-center gap-4">
                    {/* 
                        Mapea a través de los datos (props.data) y renderiza un componente BadgesImg para cada elemento.
                        Cada BadgesImg recibe las propiedades href y src del objeto mapeado.
                    */}
                    {props.data?.map(({ href, src = "" }) => (
                        <BadgesImg href={href} src={src} />
                    ))}
                </div>
            </>
        ) : (
            <>
                <div className="w-full flex justify-center items-center gap-4">
                    {/* 
                        Mapea a través de los datos (props.data) y renderiza un componente Badge para cada elemento.
                        Cada Badge recibe las propiedades name, href, y src del objeto mapeado.
                        La propiedad name tiene un valor predeterminado de cadena vacía.
                    */}
                    {props.data?.map(({ name = "", href, src = "" }) => (
                        <Badge name={name} href={href} src={src} />
                    ))}
                </div>
            </>
        )
    );
}

// Exporta el componente Badges como el valor por defecto del módulo.
export default Badges;
