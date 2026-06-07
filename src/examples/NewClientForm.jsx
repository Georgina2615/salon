import { useForm } from "../hooks/useForm";

export const NewClientForm = () => {
  const { values, handleInputChange, resetForm } = useForm({
    nombre: '',
    telefono: '',
    servicio: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault(); 
    alert(`¡Cliente registrado con éxito!\nNombre: ${values.nombre}\nTeléfono: ${values.telefono}\nServicio: ${values.servicio}`);
    resetForm(); 
  };

  return (
    <div className="bg-medio p-6 rounded-sm shadow-sm border border-fuerte/20 mt-8">
      <h3 className="text-xl font-light text-fuerte border-b border-fuerte/30 pb-3 mb-4">
        Registrar Nuevo Cliente
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="nombre"
            value={values.nombre}
            onChange={handleInputChange}
            placeholder="Nombre completo"
            className="w-full p-2 bg-claro border border-fuerte/30 rounded-sm text-fuerte focus:outline-none focus:border-fuerte focus:ring-1 focus:ring-fuerte placeholder-fuerte/50"
            required
          />
          <input
            type="tel"
            name="telefono"
            value={values.telefono}
            onChange={handleInputChange}
            placeholder="Teléfono"
            className="w-full p-2 bg-claro border border-fuerte/30 rounded-sm text-fuerte focus:outline-none focus:border-fuerte focus:ring-1 focus:ring-fuerte placeholder-fuerte/50"
            required
          />
        </div>
        <input
          type="text"
          name="servicio"
          value={values.servicio}
          onChange={handleInputChange}
          placeholder="Servicio de interés (Ej. Balayage)"
          className="w-full p-2 bg-claro border border-fuerte/30 rounded-sm text-fuerte focus:outline-none focus:border-fuerte focus:ring-1 focus:ring-fuerte placeholder-fuerte/50"
          required
        />
        <button 
          type="submit"
          className="w-full bg-fuerte text-claro py-2 rounded-sm cursor-pointer font-medium tracking-wide hover:opacity-90 transition-opacity"
        >
          Guardar Registro
        </button>
      </form>
    </div>
  );
};