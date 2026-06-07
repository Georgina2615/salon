import { Suspense, lazy, useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import { Header } from './components/Header';
import { ServicesContainer } from './examples/ServicesContainer';
import { ProtectedFinancialReport } from './examples/FinancialReport';
import { AppointmentsSection } from './examples/AppointmentsSection';
import { NewClientForm } from './examples/NewClientForm';

const LazyInventory = lazy(() => import('./examples/Inventory'));

function App() {
  const [showInventory, setShowInventory] = useState(false);

  return (
    <AuthProvider>
      <div className="min-h-screen bg-stone-50 font-sans pb-12">
        <Header />
        <ServicesContainer />
        
        <div className="max-w-4xl mx-auto px-8">
          <ProtectedFinancialReport />
          <AppointmentsSection />
          <NewClientForm />
          
          <div className="mt-12 text-center border-t border-stone-200 pt-8">
            {!showInventory && (
              <button 
                onClick={() => setShowInventory(true)}
                className="bg-stone-800 text-stone-100 px-6 py-2 rounded-sm hover:bg-stone-700 transition-colors cursor-pointer"
              >
                Cargar Módulo de Inventario
              </button>
            )}

            {showInventory && (
              <Suspense fallback={<div className="animate-pulse text-amber-700 py-4 font-medium">Descargando módulo...</div>}>
                <LazyInventory />
              </Suspense>
            )}
          </div>
          
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;