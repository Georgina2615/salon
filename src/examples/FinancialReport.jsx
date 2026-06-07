import { withAuth } from "./withAuth";

const FinancialReport = () => {
  return (
    <div className="bg-stone-800 p-6 rounded-sm shadow-md mt-8">
      <h3 className="text-xl font-light text-stone-100 border-b border-stone-600 pb-3 mb-4">
        Reporte Financiero del Día
      </h3>
      <div className="grid grid-cols-2 gap-4 text-stone-300">
        <div>
          <p className="text-xs uppercase tracking-widest text-stone-500">Ingresos Totales</p>
          <p className="text-2xl font-medium text-amber-500">$4,550.00</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-stone-500">Servicios Realizados</p>
          <p className="text-2xl font-medium text-stone-100">12</p>
        </div>
      </div>
    </div>
  );
};

export const ProtectedFinancialReport = withAuth(FinancialReport);