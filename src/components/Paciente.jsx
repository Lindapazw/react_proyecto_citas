import swal from "sweetalert" // import sweetalert

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    const {nombre, propietario, email, fecha, sintomas, id} = paciente // destructuring

    const handleEliminar = () => { // sweetalert sintax
        const respuesta = swal({
            title: "¿Estás seguro?",
            text: "!Si lo eliminas, tu no podrás ver este archivo de nuevo!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            })
            .then((willDelete) => {
                if (willDelete) {
                swal("Bien! tu archivo a sido eliminado correctamente!", {
                icon: "success",
                });
                } else {
                swal("Tu archivo no se elimino!");
                }
            }); 

        if(respuesta) {
            eliminarPaciente(id) // eliminar paciente
        }
    }

    return (
        <div className="bg-white mx-3 my-5 shadow-md px-5 py-5 rounded-xl">
                <p className="text-sm font-bold mb-5 text-gray-700 uppercase">Nombre: {''}
                <span className="normal-case font-normal">{nombre}</span>
                </p>
                <p className="text-sm font-bold mb-5 text-gray-700 uppercase">Propietario: {''}
                <span className="normal-case font-normal">{propietario}</span>
                </p>
                <p className="text-sm font-bold mb-5 text-gray-700 uppercase">Email: {''}
                <span className="normal-case font-normal">{email}</span>
                </p>
                <p className="text-sm font-bold mb-5 text-gray-700 uppercase">Fecha alta: {''}
                <span className="normal-case font-normal">{fecha}</span>
                </p>
                <p className="text-sm font-bold mb-5 text-gray-700 uppercase">Sintomas: {''}
                <span className="normal-case font-normal">{sintomas}</span>
                </p>

                <div className="flex justify-between mt-5">
                    <button type="buttom"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-md"
                    onClick={() => setPaciente(paciente)}>
                        Editar
                    </button>

                    <button type="buttom"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-md"
                    onClick={handleEliminar}>
                        Eliminar
                    </button>
                </div>

            </div>
        )
    }

export default Paciente