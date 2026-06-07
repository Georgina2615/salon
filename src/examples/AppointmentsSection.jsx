import { AppointmentManager } from "../components/AppointmentManager";

export const AppointmentsSection = () => {
  return (
    <div className="bg-medio p-6 rounded-sm shadow-sm border border-fuerte/20 mt-8">
      <h3 className="text-xl font-light text-fuerte border-b border-fuerte/30 pb-3 mb-4">
        Citas del Día
      </h3>
      <div className="space-y-4">
        <AppointmentManager render={({ status, nextStatus }) => (
          <div className="flex items-center justify-between p-4 bg-claro border border-fuerte/20 rounded-sm">
            <div>
              <p className="font-medium text-fuerte">Cliente: Ana Pérez</p>
              <p className="text-sm text-fuerte/80">Servicio: Manicura Gelish - 10:00 AM</p>
            </div>
            <div className="flex items-center gap-4">
              <span className={`px-3 py-1 text-xs font-medium uppercase tracking-wider rounded-full border 
                ${status === 'Pendiente' ? 'bg-claro border-fuerte text-fuerte' : 
                  status === 'En Curso' ? 'bg-medio border-fuerte text-fuerte' : 
                  'bg-fuerte border-fuerte text-claro'}`}>
                {status}
              </span>
              <button onClick={nextStatus} className="text-sm px-4 py-2 border border-fuerte/40 text-fuerte hover:bg-medio transition-colors rounded-sm cursor-pointer">
                Avanzar estado
              </button>
            </div>
          </div>
        )} />
      </div>
    </div>
  );
};