
const Button = ({name,...rest}) =>{
    return(
     <>
     <button {...rest}
     className="bg-white px-5 py-2 text-primary rounded-full ">{name}</button>
     </>
    )
}
export default Button;