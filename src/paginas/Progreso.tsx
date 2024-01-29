import Header from "../components/Header";
import Grafico from "../components/Grafico";
import DropdownDia from "../components/DropdownDia"

const Progreso = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-950 min-h-screen">
        <div className="grid">
          <div>
            <h2 className="font-bold text-2xl text-indigo-200 mt-5 mb-12 text-center">
              Registro de <span className="text-white font-black">Progreso</span>
            </h2>
          </div>
          <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-4">
            <DropdownDia />
          </div>
          <div className="flex flex-col lg:flex-row gap-10 ml-40 justify-around">
            <div className="flex flex-col gap-10">
              <h3 className="text-white text-2xl font-bold opacity-90">Día 1</h3>
              <div className="w-1/3 mb-10 bg-gray-300 rounded-full">
                <div className="w-80 bg-indigo-500 text-xs leading-none py-1 text-center text-white rounded-full">
                  50%
                </div>
              </div>
            </div>
            <Grafico />
          </div>
        </div>
      </div>
    </>
  );
};

export default Progreso;