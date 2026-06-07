export const ServiceCard = ({ service }) => {
  return (
    <div className="bg-medio p-6 rounded-sm shadow-sm border border-fuerte/20 hover:shadow-md transition-all duration-300">
      <h3 className="text-lg font-medium tracking-wide text-fuerte">
        {service.name}</h3>
      <p className="mt-4 text-sm font-semibold text-fuerte">
        Precio: {service.price}</p>
      <p className="text-xs uppercase tracking-widest mt-1 text-fuerte/80">
      Duración: {service.duration}</p>
    </div>
  );
};