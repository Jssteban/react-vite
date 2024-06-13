import Badge from "./Badge";
import BadgesImg from "./BadgesImg";

const Badges = (props) =>{
    return(
            props.img ?
        (
            <>
            <div className="w-full flex justify-center items-center gap-4">
                {props.data?.map(({href,src=""})=>(
                    
                    <BadgesImg  href={href} src={src} />
                    
                ))}
            </div>
            </>
        ) : (
            <>
            <div className="w-full flex justify-center items-center gap-4">
                {props.data?.map(({name="",href,src=""})=>(
                    <Badge name={name} href={href} src={src} />
                ))}
            </div>
            </>
        )
    )
}
export default Badges;