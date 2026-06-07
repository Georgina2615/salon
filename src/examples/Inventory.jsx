const Inventory = () => {
  return (
    <div className="bg-medio p-6 rounded-sm shadow-sm mt-8 border border-fuerte/20">
      <h3 className="text-xl font-light text-fuerte border-b border-fuerte/30 pb-3 mb-4">
        Inventario de Productos (Cargado dinámicamente)
      </h3>
      <ul className="text-fuerte space-y-2 text-sm">
        <li className="flex justify-between border-b border-fuerte/20 pb-1">
          <span>Top coat</span> <span className="font-medium text-fuerte">15 pzas</span>
        </li>
        <li className="flex justify-between border-b border-fuerte/20 pb-1">
          <span>Exfoliante</span> <span className="font-medium text-fuerte">8 pzas</span>
        </li>
        <li className="flex justify-between pb-1">
          <span>Peróxido 20 vol. 1L</span> <span className="font-medium text-fuerte">12 pzas</span>
        </li>
      </ul>
    </div>
  );
};

export default Inventory;