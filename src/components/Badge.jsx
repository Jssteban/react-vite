const Badge = (props) => {
    const base = "bg-primary text-secondary px-4 py-2 rounded-full"
    
    return (
        <>
            <a href={props.href}
             className={`${base}`}>{props.name || ""}
            </a> 
        </>
    )
}
export default Badge;
