export const withAuth = (WrappedComponent) => {
  // Retornamos un nuevo componente funcional
  return (props) => {
    const userRole = "receptionist"; 

    if (userRole !== "admin") {
      return (
        <div className="bg-red-50 p-6 rounded-sm border border-red-100 text-center mt-8">
          <h3 className="text-red-800 font-medium tracking-wide">Acceso Restringido</h3>
          <p className="text-red-600 text-sm mt-2">
            Solo la administración puede visualizar los cortes de caja y reportes financieros.
          </p>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
};