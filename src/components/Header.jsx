import { useAuth } from '../context/AuthContext';

export const Header = () => {
  const { role, toggleRole } = useAuth();

  return (
    <header className="bg-fuerte text-claro p-4 px-8 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-light tracking-widest italic">SALÓN ELEGANCE</h1>
      <div className="flex items-center gap-4">
        <span className="text-sm">
          Usuario actual: <strong className="text-medio uppercase ml-1">{role}</strong>
        </span>
        <button
          onClick={toggleRole}
          className="bg-medio text-fuerte px-4 py-1.5 rounded-sm text-sm font-medium cursor-pointer transition-colors"
        >
          Cambiar de Usuario
        </button>
      </div>
    </header>
  );
};