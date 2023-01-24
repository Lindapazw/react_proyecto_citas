import { useState } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import Paciente from "./components/Paciente"

function App() {

  const [pacientes, setPacientes] = useState([]);

  return (
    <div className="container mx-auto mt-5">
        <Header
          numeros={1}
        />

      <div className="mt-12 md:flex">
      <Formulario/>
      <ListadoPacientes/>
      </div>
    </div>
  )
}

export default App
