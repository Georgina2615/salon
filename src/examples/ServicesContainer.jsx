import { useState, useEffect } from "react";
import { getServices } from "../services/salonData";
import { ServiceCard } from "../components/ServiceCard";

export const ServicesContainer = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getServices().then((data) => {
      setServices(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div className="p-10 text-center text-fuerte/80 tracking-widest uppercase text-sm animate-pulse">Cargando catálogo...</div>;
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-light tracking-wide mb-8 text-fuerte border-b border-fuerte/30 pb-3">
        Nuestros Servicios
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};