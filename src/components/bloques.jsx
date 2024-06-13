
import Card from "./Card";

const Bloques = () => {
  const cardData = [
    {
      
      title: 'Registra tu taller',
      description: 'Trabajan con Garapp',
      img: "./tallerimagen.jfif"
    },
    {
      title: 'Registra tu almacén',
      description: 'Disfrute de una logística inmediata',
      img: "./almacenimagen.jfif"
    },
    {
      title: '¡Únete como repartidor!',
      description: 'Gana dinero extra entregando paquetes,tenemos las mejores tarifas y beneficios.',
      img: "./repartidorimagen.jfif"
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {cardData.map((card) => (
           <Card  {...card}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bloques;