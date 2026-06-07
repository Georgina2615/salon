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
    <div className="bg-white p-6 rounded-sm shadow-sm border border-stone-200 mt-8">
      <h3 className="text-xl font-light text-stone-800 border-b border-stone-200 pb-3 mb-4">
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
            className="w-full p-2 border border-stone-300 rounded-sm focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
            required
          />
          <input
            type="tel"
            name="telefono"
            value={values.telefono}
            onChange={handleInputChange}
            placeholder="Teléfono"
            className="w-full p-2 border border-stone-300 rounded-sm focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
            required
          />
        </div>
        <input
          type="text"
          name="servicio"
          value={values.servicio}
          onChange={handleInputChange}
          placeholder="Servicio de interés (Ej. Balayage)"
          className="w-full p-2 border border-stone-300 rounded-sm focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
          required
        />
        <button 
          type="submit"
          className="w-full bg-stone-800 text-stone-100 py-2 rounded-sm hover:bg-stone-700 transition-colors font-medium tracking-wide cursor-pointer"
        >
          Guardar Registro
        </button>
      </form>
    </div>
  );
};