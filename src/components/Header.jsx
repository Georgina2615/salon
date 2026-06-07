import { useAuth } from '../context/AuthContext';

export const Header = () => {
  const { role, toggleRole } = useAuth();

  return (
    <header className="bg-stone-900 text-stone-100 p-4 px-8 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-light tracking-widest">SALÓN ELEGANCE</h1>
      <div className="flex items-center gap-4">
        <span className="text-sm text-stone-400">
          Usuario actual: <strong className="text-amber-500 uppercase ml-1">{role}</strong>
        </span>
        <button
          onClick={toggleRole}
          className="bg-stone-700 hover:bg-stone-600 px-4 py-1.5 rounded-sm text-sm transition-colors cursor-pointer"
        >
          Cambiar de Usuario
        </button>
      </div>
    </header>
  );
};