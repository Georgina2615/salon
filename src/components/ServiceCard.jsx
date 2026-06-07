export const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white p-6 rounded-sm shadow-sm border border-stone-200 hover:shadow-md hover:border-stone-400 transition-all duration-300">
      <h3 className="text-lg font-medium text-stone-800 tracking-wide">{service.name}</h3>
      <p className="text-amber-800 mt-4 text-sm font-medium">Precio: {service.price}</p>
      <p className="text-stone-500 text-xs uppercase tracking-wider mt-1">Duración: {service.duration}</p>
    </div>
  );
};