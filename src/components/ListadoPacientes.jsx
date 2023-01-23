import Paciente from "./Paciente"

const ListadoPacientes = () => {
    return (
      <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll">
        <h2 className=" font-black text-xl text-center">Listado de pacientes</h2>
        <p className="text-center text-lm mt-1 mb-5">
          Administra tus {''}
          <span className="text-indigo-600 font-bold ">
            pacientes y citas
          </span>
        </p>

        <Paciente/>
        <Paciente/>
        <Paciente/>
        <Paciente/>
      </div>
    )
  }
  
  export default  ListadoPacientes

