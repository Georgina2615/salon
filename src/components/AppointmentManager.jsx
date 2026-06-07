import { useState } from 'react';

export const AppointmentManager = ({ render }) => {
  const [status, setStatus] = useState('Pendiente');

  const nextStatus = () => {
    if (status === 'Pendiente') setStatus('En Curso');
    else if (status === 'En Curso') setStatus('Finalizado');
    else setStatus('Pendiente');
  };

  return render({ status, nextStatus });
};