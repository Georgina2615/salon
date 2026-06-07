// src/examples/AppointmentsSection.jsx
import { AppointmentManager } from "../components/AppointmentManager";

export const AppointmentsSection = () => {
  return (
    <div className="bg-white p-6 rounded-sm shadow-sm border border-stone-200 mt-8">
      <h3 className="text-xl font-light text-stone-800 border-b border-stone-200 pb-3 mb-4">
        Citas del Día
      </h3>

      <div className="space-y-4">
        {/* Render Prop */}
        <AppointmentManager
          render={({ status, nextStatus }) => (
            <div className="flex items-center justify-between p-4 bg-stone-50 border border-stone-100 rounded-sm">
              <div>
                <p className="font-medium text-stone-800">Cliente: Ana Pérez</p>
                <p className="text-sm text-stone-500">Servicio: Manicura Gelish - 10:00 AM</p>
              </div>
              
              <div className="flex items-center gap-4">
                <span className={`px-3 py-1 text-xs font-medium uppercase tracking-wider rounded-full 
                  ${status === 'Pendiente' ? 'bg-amber-100 text-amber-800' : 
                    status === 'En Curso' ? 'bg-stone-200 text-stone-800' : 
                    'bg-green-100 text-green-800'}`}>
                  {status}
                </span>
                
                <button 
                  onClick={nextStatus}
                  className="text-sm px-4 py-2 border border-stone-300 text-stone-600 hover:bg-stone-200 transition-colors rounded-sm cursor-pointer"
                >
                  Avanzar estado
                </button>
              </div>
            </div>
          )}
        />
      </div>
    </div>
  );
};