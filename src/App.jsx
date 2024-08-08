import './App.css'
import Footer from './Components/Footer'
import Insignia from './Components/Insignia'
import TarjetaEmpleado from './Components/TarjetaEmpleado'

function App() {
  return (
    <>
      <TarjetaEmpleado
        nombre="Juan Perez"
        rol="Desarrollador"
        departamento="IT"
      >
        <Insignia descripcion="Empleado del mes" color="gold" />
      </TarjetaEmpleado>
      <TarjetaEmpleado
        nombre="Ana Lopez"
        rol="Reclutado"
        departamento="Recursos humanos"
      >
        <Insignia descripcion="Most Valued Personal" color="purple" />
      </TarjetaEmpleado>
      <TarjetaEmpleado
        nombre="Jorge Martinez"
        rol="Diseñador UX/UI"
        departamento="Diseño y perfeccionamiento"
      >
        <Insignia descripcion="Creativo del mes" color="deeppink" />
      </TarjetaEmpleado>
      <Footer />
    </>
  )
}

export default App
