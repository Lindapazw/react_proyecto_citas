import { useState } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import Paciente from "./components/Paciente"

function App() {

  const [pacientes, setPacientes] = useState([]); // arreglo de paciente
  const [paciente, setPaciente] = useState({});

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id); // eliminar paciente del state

    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-4">
        <Header/>

      <div className="mt-10 md:flex">
      <Formulario
        pacientes = {pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
        setPaciente={setPaciente}
      />

      <ListadoPacientes
        pacientes = {pacientes}  // creando prop de pacientes
        setPaciente = {setPaciente}
        eliminarPaciente={eliminarPaciente} // eliminar paciente 
      />

      </div>
    </div>
  )
}

export default App
