import Badges from "components/Badges";
import Carousel from "../components/carusel";
import { FiSettings } from "react-icons/fi";
import { categories } from "utils/features";

const HomeEntry = () => {
    return (
        <>
            <div>
                <h2><FiSettings /> Talleres cerca de ti</h2>
                <Carousel />
                <h2><FiSettings /> Almacenes cerca de ti</h2>
                <Carousel />
                <h2><FiSettings />Los más elegidos</h2>
                <Badges data={categories}/>
                <h2><FiSettings />Los más elegidos</h2>
                <Badges img data={categories}/> 
                <br />
                <h1 className="text-primary font-bold uppercase text-7xl text-center">unete <span className="text-terceary">garapp</span></h1>
            </div>
        </>
    )
}
export default HomeEntry;