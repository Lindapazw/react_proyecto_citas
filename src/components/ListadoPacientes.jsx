import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

    return (
      <div className="md:w-1/2 lg:w-3/5 h-screen overflow-scroll">

        {pacientes && pacientes.length ? (
          <>
            <h2 className=" font-black text-xl text-center">Listado de pacientes</h2>
            <p className="text-center text-lm mt-1 mb-5">
              Administra tus {''}
              <span className="text-indigo-600 font-bold ">
                pacientes y citas
              </span>
            </p>

            { pacientes.map( (paciente ) => ( // creando variable temporal de paciente
                <Paciente
                  key={paciente.id} // Id
                  paciente={paciente}
                  setPaciente={setPaciente}
                  eliminarPaciente={eliminarPaciente}
                />
              ))}
        </>

        ): (

          <>
          <h2 className=" font-black text-xl text-center">No hay pacientes pacientes</h2>
            <p className="text-center text-lm mt-1 mb-5">
              Comienza agregando pacientes {''}
              <span className="text-indigo-600 font-bold ">
                y aparecerán en este lugar
              </span>
            </p>
          </>

        )}

      </div>
    )
  }
  
  export default  ListadoPacientes

