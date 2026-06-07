const Inventory = () => {
  return (
    <div className="bg-stone-800 p-6 rounded-sm shadow-md mt-8 border border-stone-700">
      <h3 className="text-xl font-light text-stone-100 border-b border-stone-600 pb-3 mb-4">
        Inventario de Productos (Cargado dinámicamente)
      </h3>
      <ul className="text-stone-300 space-y-2 text-sm">
        <li className="flex justify-between border-b border-stone-700 pb-1">
          <span>Top coat</span> <span className="text-amber-500">15 pzas</span>
        </li>
        <li className="flex justify-between border-b border-stone-700 pb-1">
          <span>Exfoliante</span> <span className="text-amber-500">8 pzas</span>
        </li>
        <li className="flex justify-between pb-1">
          <span>Peróxido 20 vol. 1L</span> <span className="text-amber-500">12 pzas</span>
        </li>
      </ul>
    </div>
  );
};

export default Inventory;