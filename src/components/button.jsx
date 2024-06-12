
const Button = ({name,...rest}) =>{

    return(
     <>
     <button {...rest}
     className="bg-primary px-5 py-2 text-white  ">{name}</button>
     </>
    )
}
export default Button;