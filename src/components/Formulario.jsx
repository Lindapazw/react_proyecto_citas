import {useState, useEffect} from 'react';
import Error from './Error';

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState(''); // declaracion de state por orden de componente

  const [error, setError] = useState(false)

  useEffect (() => {  //  evita re - render
    if (Object.keys(paciente).length > 0) {
        setNombre(paciente.nombre)
        setPropietario(paciente.propietario)
        setEmail(paciente.email)
        setFecha(paciente.fecha)
        setSintomas(paciente.sintomas)
    } 
  }, [paciente])


  const generarId = () => { // generar id
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // validacion de formulario 
    if([nombre, propietario, email, fecha, sintomas].includes('')) { // arreglo
      console.log('Hay al menos un campo vacío')

      setError(true)
      return;
    } 
      setError(false)

      // objeto de pacientes
      const objetoPaciente = {
        nombre, 
        propietario, 
        email, 
        fecha, 
        sintomas,
      }

      if(paciente.id) {
        // editando el registro
        objetoPaciente.id = paciente.id 
        const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

        setPacientes(pacientesActualizados)
        setPaciente({})

      } else {
        // nuevo registro
        objetoPaciente.id = generarId();
        setPacientes([...pacientes, objetoPaciente]);

      }

      // reiniciar el form
      setNombre('')
      setPropietario('')
      setEmail('')
      setFecha('')
      setSintomas('')
  }

  return (
  <div className="md:w-1/2 lg:w-2/5 mx-5">

    <h2 className="font-black text-xl text-center ">Seguimiento pacientes</h2>

    <p className="mt-1 text-center mb-5 text-lm"> Añade pacientes y {''} 
      <span className="text-indigo-600 font-bold "> administralos</span>
    </p>

    <form 
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg py-5 px-5 mb-5">

      {error && <Error>Todos los campos son obligatorios</Error>}

      <div className="mb-3"> 
        <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold text-sm"> 
          Nombre mascota:
        </label>

          <input 
            id="mascota"
            type="text" 
            placeholder="Nombre de la mascota" 
            className="border-2 w-full p-1 mt-1 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
      </div>

      <div className="mb-3"> 
        <label htmlFor="propietario" className="text-sm block text-gray-700 uppercase font-bold"> 
          Nombre propietario:
        </label>

          <input 
            id="propietario"
            type="text" 
            placeholder="Nombre del propietario" 
            className="border-2 w-full p-1 mt-1 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
      </div>

      <div className="mb-3"> 
        <label htmlFor="email" className="text-sm block text-gray-700 uppercase font-bold"> 
          Email:
        </label>

          <input 
            id="email"
            type="text" 
            placeholder="Email del propietario" 
            className="border-2 w-full p-1 mt-1 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
      </div>

      <div className="mb-3"> 
        <label htmlFor="alta" className="text-sm block text-gray-700 uppercase font-bold"> 
          Alta:
        </label>

          <input 
            id="alta"
            type="date" 
            className="border-2 w-full p-1 mt-1 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
      </div>

      <div className="mb-3"> 
        <label htmlFor="sintomas" className="text-sm block text-gray-700 uppercase font-bold"> 
          Síntomas:
        </label>

        <textarea 
        id="sintomas" 
        className="border-2 w-full p-1 mt-1 placeholder-gray-400 rounded-md" 
        placeholder="Describe los síntomas"
        value={sintomas}
        onChange={(e) => setSintomas(e.target.value)}
        >           
        </textarea>
      </div>


      <input 
      type="submit" 
      className=" bg-indigo-600 w-full p-2 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
      value= { paciente.id ? 'editar paciente' : 'agregar paciente'} // cambio value "agregar" y "editar" boton de paciente
      />
      
    </form>
  </div>
  )
}

export default Formulario