import Header from "../components/Header"
import DropdownDia from "../components/DropdownDia";
const MiRutina = () => {
  return (
    <>
        <Header />
        <div className="bg-gray-950 min-h-screen">
          <div className="grid">
            <div>
              <h2 className="font-bold text-2xl text-indigo-200 mt-5 mb-12 text-center">Seguimiento de <span className="text-white font-black">Rutina</span></h2>
            </div>
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-4">
                <DropdownDia />
            </div>
            <div className="text-white">
              <div className="flex justify-center gap-1">
                <div className="flex flex-col items-center w-[500px] rounded-xl bg-gray-900 bg-clip-border text-gray-700 shadow-md mb-10">
                  <div className="p-5 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white">
                    <h5 className="font-sans text-xl font-semibold leading-snug tracking-normal text-white antialiased">Sentadilla</h5>
                  </div>
                  <div className="flex flex-row gap-3 m-3 mb-6">
                    <div className="block">
                      <label className="text-gray-400 font-bold text-sm mb-2 block">Series a realizar:</label>
                        <input
                        id="series"
                        type="number"
                        className="flex h-9 rounded-md border-2 bg-background px-2 py-1.5 text-md ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-indigo-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined"
                        placeholder="12"
                        min="1" max="6"
                        />
                      </div>
                      <div className="block">
                        <label className="text-gray-400 font-bold text-sm mb-2 block">Reps 1 sem antes:</label>
                          <input
                          id="reps-antes"
                          type="number"
                          className="flex h-9 rounded-md border-2 bg-background px-2 py-1.5 text-md ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-indigo-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined"
                          placeholder="12"
                          min="6" max="15"
                          />
                      </div>
                      <div className="block">
                        <label className="text-gray-400 font-bold text-sm mb-2 block">Reps 1 sem después:</label>
                          <input
                          id="reps-despues"
                          type="number"
                          className="flex h-9 rounded-md border-2 bg-background px-2 py-1.5 text-md ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-indigo-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined"
                          placeholder="12"
                          min="6" max="15"
                          />
                      </div>
                      <div className="block">
                        <label className="text-gray-400 font-bold text-sm mb-2 block">Kgs 1 sem antes:</label>
                          <input
                          id="kilos-antes"
                          type="number"
                          className="flex h-9 rounded-md border-2 bg-background px-2 py-1.5 text-md ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-indigo-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined"
                          placeholder="75.5"
                          min="1" max="300"
                          />
                      </div>
                      <div className="block">
                        <label className="text-gray-400 font-bold text-sm mb-2 block">Kgs 1 sem después:</label>
                          <input
                          id="kilos-despues"
                          type="number"
                          className="flex h-9 rounded-md border-2 bg-background px-2 py-1.5 text-md ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-indigo-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined"
                          placeholder="75.5"
                          min="1" max="300"
                          />
                      </div>
                    </div>
                      <div className="flex flex-row mb-2 ml-80">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pencil hover:cursor-pointer hover:text-indigo-500 transition-transform transform hover:scale-110" width="40" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4F69C6" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                        <path d="M13.5 6.5l4 4" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash hover:cursor-pointer hover:text-indigo-500 transition-transform transform hover:scale-110" width="40" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4F69C6" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M4 7l16 0" />
                        <path d="M10 11l0 6" />
                        <path d="M14 11l0 6" />
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                        </svg>
                        <button
                          className="select-none rounded-lg bg-indigo-400 py-2 px-2 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-indigo-400/20 transition-all hover:shadow-md hover:shadow-indigo-400/30 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                          data-ripple-light="true"
                        >
                          Guardar
                        </button>
                      </div>
                    </div>  
                    <div className="flex items-start">
                <div className="flex flex-col items-center w-[500px] rounded-xl bg-gray-900 bg-clip-border text-gray-700 shadow-md ml-28 mb-10">
                  <div className="p-5 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white">
                    <h5 className="font-sans text-xl font-semibold leading-snug tracking-normal text-white antialiased">Sentadilla</h5>
                  </div>
                  <div className="flex flex-row gap-3 m-3 mb-6">
                    <div className="block">
                      <label className="text-gray-400 font-bold text-sm mb-2 block">Series a realizar:</label>
                        <input
                        id="series"
                        type="number"
                        className="flex h-9 rounded-md border-2 bg-background px-2 py-1.5 text-md ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-indigo-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined"
                        placeholder="12"
                        min="1" max="6"
                        />
                      </div>
                      <div className="block">
                        <label className="text-gray-400 font-bold text-sm mb-2 block">Reps 1 sem antes:</label>
                          <input
                          id="reps-antes"
                          type="number"
                          className="flex h-9 rounded-md border-2 bg-background px-2 py-1.5 text-md ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-indigo-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined"
                          placeholder="12"
                          min="6" max="15"
                          />
                      </div>
                      <div className="block">
                        <label className="text-gray-400 font-bold text-sm mb-2 block">Reps 1 sem después:</label>
                          <input
                          id="reps-despues"
                          type="number"
                          className="flex h-9 rounded-md border-2 bg-background px-2 py-1.5 text-md ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-indigo-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined"
                          placeholder="12"
                          min="6" max="15"
                          />
                      </div>
                      <div className="block">
                        <label className="text-gray-400 font-bold text-sm mb-2 block">Kgs 1 sem antes:</label>
                          <input
                          id="kilos-antes"
                          type="number"
                          className="flex h-9 rounded-md border-2 bg-background px-2 py-1.5 text-md ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-indigo-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined"
                          placeholder="75.5"
                          min="1" max="300"
                          />
                      </div>
                      <div className="block">
                        <label className="text-gray-400 font-bold text-sm mb-2 block">Kgs 1 sem después:</label>
                          <input
                          id="kilos-despues"
                          type="number"
                          className="flex h-9 rounded-md border-2 bg-background px-2 py-1.5 text-md ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-indigo-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined"
                          placeholder="75.5"
                          min="1" max="300"
                          />
                      </div>
                    </div>
                      <div className="flex flex-row mb-2 ml-80">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pencil hover:cursor-pointer hover:text-indigo-500 transition-transform transform hover:scale-110" width="40" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4F69C6" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                        <path d="M13.5 6.5l4 4" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash hover:cursor-pointer hover:text-indigo-500 transition-transform transform hover:scale-110" width="40" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4F69C6" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M4 7l16 0" />
                        <path d="M10 11l0 6" />
                        <path d="M14 11l0 6" />
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                        </svg>
                        <button
                          className="select-none rounded-lg bg-indigo-400 py-2 px-2 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-indigo-400/20 transition-all hover:shadow-md hover:shadow-indigo-400/30 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                          data-ripple-light="true"
                        >
                          Guardar
                        </button>
                      </div>
                  </div> 
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MiRutina