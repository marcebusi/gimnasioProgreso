import Header from "../components/Header"
import DropdownDia from "../components/DropdownDia"
import DropdownMus from "../components/DropwdownMus"

const ArmaRutina = () => {
  const handleSelect = (selectedOption: string) => {
    // Implementa la lógica condicional aquí según la opción seleccionada
    console.log(`Opción seleccionada: ${selectedOption}`);
  };
  return (
    <>
        <Header />
        <div className="grid bg-gray-950 min-h-screen">
          <div>
            <h2 className="font-bold text-2xl text-indigo-200 mt-5 mb-12 text-center">Arma tu <span className="text-white font-black">Rutina</span></h2>
            <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center gap-4">
              <DropdownMus onSelect={handleSelect}/>
              <DropdownDia />
            </div>
          </div>
        </div>
    </>
  )
}

export default ArmaRutina