import { withAuth } from "./withAuth";

const FinancialReport = () => {
  return (
    <div className="bg-medio p-6 rounded-sm shadow-sm mt-8 border border-fuerte/20">
      <h3 className="text-xl font-light text-fuerte border-b border-fuerte/30 pb-3 mb-4">
        Reporte Financiero del Día
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-xs uppercase tracking-widest text-fuerte/80">Ingresos Totales</p>
          <p className="text-2xl font-medium text-fuerte">$4,550.00</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-fuerte/80">Servicios Realizados</p>
          <p className="text-2xl font-medium text-fuerte">12</p>
        </div>
      </div>
    </div>
  );
};

export const ProtectedFinancialReport = withAuth(FinancialReport);