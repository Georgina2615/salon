import { ServicesContainer } from './examples/ServicesContainer'
import { ProtectedFinancialReport } from './examples/FinancialReport'
import { AppointmentsSection } from './examples/AppointmentsSection'
import { NewClientForm } from './examples/NewClientForm'

function App() {
  return (
    <div className="min-h-screen bg-stone-100 font-sans">
      <ServicesContainer />

      <div className="max-w-4xl mx-auto px-8">
        <ProtectedFinancialReport />
        <AppointmentsSection />
        <NewClientForm />
        
      </div>
    </div>
  )
}

export default App