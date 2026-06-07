# Salón Elegance - Dashboard Administrativo

Este proyecto es una aplicación web (Mini-Dashboard) para la gestión de un salón de belleza, desarrollada con React y Tailwind CSS v4. Su propósito principal es demostrar la implementación práctica de **6 Patrones Avanzados y Buenas Prácticas en React** aplicados a un caso de uso real.

## Tecnologías Utilizadas
* React 18
* Vite
* Tailwind CSS v4

## Patrones y Conceptos Implementados

A lo largo del código de este proyecto, se implementaron los siguientes conceptos avanzados para mantener una arquitectura limpia y escalable:

1. **Componentes Contenedores y Presentacionales:** - *Ubicación:* `src/examples/ServicesContainer.jsx` y `src/components/ServiceCard.jsx`.
   - *Uso:* Separación de la lógica de carga de datos (servicios del salón) de la vista (tarjetas de interfaz).

2. **Higher-Order Components (HOCs):**
   - *Ubicación:* `src/examples/withAuth.jsx`.
   - *Uso:* Un "guardia de seguridad" que protege el componente de `FinancialReport.jsx`, permitiendo el acceso solo a usuarios con rol de administrador.

3. **Render Props:**
   - *Ubicación:* `src/components/AppointmentManager.jsx`.
   - *Uso:* Un motor lógico que controla los estados de una cita (Pendiente, En Curso, Finalizado) y le presta estos datos a la vista en `AppointmentsSection.jsx` para que los dibuje.

4. **Custom Hooks:**
   - *Ubicación:* `src/hooks/useForm.js`.
   - *Uso:* Extracción de la lógica repetitiva para el manejo de inputs y estados en el formulario de registro de nuevos clientes (`NewClientForm.jsx`).

5. **Context API:**
   - *Ubicación:* `src/context/AuthContext.jsx`.
   - *Uso:* Creación de un estado global para manejar el rol del usuario (Autenticación simulada) y evitar el *Prop Drilling* desde el componente `Header.jsx` hasta los componentes protegidos.

6. **Code Splitting (Carga Perezosa):**
   - *Ubicación:* `src/App.jsx` y `src/examples/Inventory.jsx`.
   - *Uso:* Implementación de `React.lazy` y `<Suspense>` para diferir la descarga del módulo de inventario hasta que el usuario hace clic en el botón de carga, optimizando el rendimiento inicial de la aplicación.

## Instalación y Uso

Para correr este proyecto en tu entorno local:

1. Clona este repositorio:
   ```bash
   git clone [https://github.com/Georgina2615/salon.git](https://github.com/Georgina2615/salon.git)