import  Button  from "../components/button";

const Card = (props) =>{

    return(
        <>
         <div className="p-4 lg:w-1/3">
              <div className="h-[400px] bg-primary flex flex-col gap-4 justify-start pb-4 items-center rounded-lg overflow-hidden text-center">
                <div className="w-full h-40">
                <img src={props.img} alt="imagen" className="h-full w-full object-cover"/>
                </div>
                <div className="w-full p-4">
                <h1 className="title-font sm:text-2xl text-xl font-medium text-terceary mb-3">{props.title}</h1>
                <p className="leading-relaxed mb-3 text-secondary">{props.description}</p>
                </div>
                <div className="w-fit">
                  <Button name={"Trabaja con Garapp"}/>
                </div>
              </div>
            </div>
        </>
    )
}
export default Card;