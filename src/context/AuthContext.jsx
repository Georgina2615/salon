import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [role, setRole] = useState('receptionist');

  const toggleRole = () => {
    setRole(role === 'receptionist' ? 'admin' : 'receptionist');
  };

  return (
    <AuthContext.Provider value={{ role, toggleRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);