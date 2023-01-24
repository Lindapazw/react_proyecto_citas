import {useState, useEffect} from 'react';

const Formulario = ({pacientes, setPacientes}) => {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState(''); // declaracion de state por orden de componente

  const [error, setError] = useState(false)

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
        sintomas
      }

      setPacientes([...pacientes, objetoPaciente]);

      // c
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

      {error && 
        <div className='bg-red-700 text-center text-white p-1 font-bold mb-2 rounded-md'>
          <p>Todos los campos son obligatorios</p>
        </div>
      }

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
      className=" bg-indigo-600 w-full p-1 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
      value="agregar paciente"
      />
      
    </form>
  </div>
  )
}

export default Formulario