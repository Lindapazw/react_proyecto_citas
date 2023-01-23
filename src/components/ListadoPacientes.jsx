const ListadoPacientes = () => {
    return (
      <div className="md:w-1/2 lg:w-2/5">

          <h2 className="font-black text-2xl text-center">Seguimiento pacientes</h2>

          <p className="text-lg mt-5 text-center mb-10"> Añade pacientes y {''} 
            <span className="text-indigo-600 font-bold "> Administralos</span>
          </p>

          <form className="bg-white shadow-md rounded-lg py-5 px-5 mb-10">

            <div className="mb-5"> 
              <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold"> 
                Nombre mascota:
              </label>

                <input 
                  id="mascota"
                  type="text" 
                  placeholder="Nombre de la mascota" 
                  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                />
            </div>

            <div className="mb-5"> 
              <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold"> 
                Nombre propietario:
              </label>

                <input 
                  id="propietario"
                  type="text" 
                  placeholder="Nombre del propietario" 
                  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                />
            </div>

            <div className="mb-5"> 
              <label htmlFor="email" className="block text-gray-700 uppercase font-bold"> 
                Email:
              </label>

                <input 
                  id="email"
                  type="text" 
                  placeholder="Email del propietario" 
                  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                />
            </div>

            <div className="mb-5"> 
              <label htmlFor="alta" className="block text-gray-700 uppercase font-bold"> 
                Alta:
              </label>

                <input 
                  id="alta"
                  type="date" 
                  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                />
            </div>

            <div className="mb-5"> 
              <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold"> 
                Síntomas:
              </label>

              <textarea 
              id="sintomas" 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
              placeholder="Describe los síntomas">           
              </textarea>
            </div>


            <input 
            type="submit" 
            className=" bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
            value="agregar paciente"
            />
            
          </form>
      </div>
    )
  }
  
  export default  ListadoPacientes

