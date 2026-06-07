import { AuthProvider } from './context/AuthContext';
import { Header } from './components/Header';
import { ServicesContainer } from './examples/ServicesContainer';
import { ProtectedFinancialReport } from './examples/FinancialReport';
import { AppointmentsSection } from './examples/AppointmentsSection';
import { NewClientForm } from './examples/NewClientForm';

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-stone-100 font-sans pb-12">
        <Header />
        
        <ServicesContainer />
        
        <div className="max-w-4xl mx-auto px-8">
          <ProtectedFinancialReport />
          <AppointmentsSection />
          <NewClientForm />
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;