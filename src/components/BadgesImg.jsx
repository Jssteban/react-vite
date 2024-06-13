const BadgesImg = (props) => {
    const base = "bg-primary text-secondary rounded-full overflow-hidden w-32  h-32"
    
    return (
        <>
            <a href={props.href}
             className={`${base}`}>
                {props.src && <img className="h-full w-full " src={props.src || ""} alt="imagen" />}
            </a> 
        </>
    )
}
export default BadgesImg;
