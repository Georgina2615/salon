import { ServicesContainer } from './examples/ServicesContainer'
import { ProtectedFinancialReport } from './examples/FinancialReport'

function App() {
  return (
    <div className="min-h-screen bg-stone-100 font-sans">
      <ServicesContainer />
      
      <div className="max-w-4xl mx-auto px-8">
        <ProtectedFinancialReport />
      </div>
    </div>
  )
}

export default App