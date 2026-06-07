import { useAuth } from '../context/AuthContext';

export const withAuth = (WrappedComponent) => {
  return (props) => {
    const { role } = useAuth(); 

    if (role !== "admin") {
      return (
       <div className="bg-medio p-6 rounded-sm border border-fuerte/50 text-center mt-8">
       <h3 className="text-fuerte font-medium tracking-wide">Acceso Restringido</h3>
       <p className="text-fuerte/80 text-sm mt-2">
       Solo la administración puede visualizar los cortes de caja y reportes financieros.
       </p>
      </div>
      );
    }
    
    return <WrappedComponent {...props} />;
  };
};