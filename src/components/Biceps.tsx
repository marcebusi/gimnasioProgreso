const Biceps = () => {
    return (
        <>
        <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-8 gap-x-80 items-center mt-10">
                    {/* Tarjeta 1 */}
                    <div className="flex flex-col w-72 h-56 rounded-xl bg-gray-900 bg-clip-border text-gray-700 shadow-md">
                        <div className="flex items-center overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white">
                            <h5 id="curl-barra" className="p-20 font-sans text-xl font-semibold leading-snug tracking-normal text-white antialiased">Curl c/barra</h5>
                        </div>
                        <div className="flex gap-x-2 mb-4 m-4 mt-0">
                            <div className="block">
                                <label className="text-gray-400 font-bold text-sm mb-2 block">Series:</label>
                                <input
                                    type="number"
                                    className="flex h-9 w-full rounded-md border-2 bg-background px-2 py-1.5 text-md ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-indigo-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined"
                                    placeholder="12"
                                    min="1" max="6"
                                />
                            </div>
                            <div className="block">
                                <label className="text-gray-400 font-bold text-sm mb-2 block">Reps:</label>
                                <input
                                    type="number"
                                    className="flex h-9 w-full rounded-md border-2 bg-background px-2 py-1.5 text-md ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-indigo-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined"
                                    placeholder="12"
                                    min="6" max="15"
                                />
                            </div>
                            <div className="block">
                                <label className="text-gray-400 font-bold text-sm mb-2 block">Kilos:</label>
                                <input
                                    id="ccvNumber"
                                    type="number"
                                    className="flex h-9 w-full rounded-md border-2 bg-background px-2 py-1.5 text-md ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-indigo-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined"
                                    placeholder="75.5"
                                    min="1" max="300"
                                />
                            </div>
                        </div>
                        <div className="pb-4 pl-2 pt-0">
                            <button
                            className="select-none rounded-lg bg-indigo-400 py-3 px-4 ml-2 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-indigo-400/20 transition-all hover:shadow-lg hover:shadow-indigo-400/30 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                            >
                            Agregar
                            </button>
                        </div>
                        </div>
                        {/* Fin Tarjeta 1 */}
                
                        {/* Repite este bloque para cada tarjeta */}
                        <div className="flex flex-col w-72 h-56 rounded-xl bg-gray-900 bg-clip-border text-gray-700 shadow-md">
                        <div className="flex items-center overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white">
                            <h5 id="curl-martillo" className="p-20 font-sans text-xl font-semibold leading-snug tracking-normal text-white antialiased">Curl martillo</h5>
                        </div>
                        <div className="flex gap-x-2 mb-4 m-4 mt-0">
                            <div className="block">
                                <label className="text-gray-400 font-bold text-sm mb-2 block">Series:</label>
                                <input
                                    type="number"
                                    className="flex h-9 w-full rounded-md border-2 bg-background px-2 py-1.5 text-md ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-indigo-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined"
                                    placeholder="12"
                                    min="1" max="6"
                                />
                            </div>
                            <div className="block">
                                <label className="text-gray-400 font-bold text-sm mb-2 block">Reps:</label>
                                <input
                                    type="number"
                                    className="flex h-9 w-full rounded-md border-2 bg-background px-2 py-1.5 text-md ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-indigo-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined"
                                    placeholder="12"
                                    min="6" max="15"
                                />
                            </div>
                            <div className="block">
                                <label className="text-gray-400 font-bold text-sm mb-2 block">Kilos:</label>
                                <input
                                    id="ccvNumber"
                                    type="number"
                                    className="flex h-9 w-full rounded-md border-2 bg-background px-2 py-1.5 text-md ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-indigo-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined"
                                    placeholder="75.5"
                                    min="1" max="300"
                                />
                            </div>
                        </div>
                        <div className="pb-4 pl-2 pt-0">
                            <button
                            className="select-none rounded-lg bg-indigo-400 py-3 px-4 ml-2 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-indigo-400/20 transition-all hover:shadow-lg hover:shadow-indigo-400/30 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                            >
                            Agregar
                            </button>
                        </div>
                        </div>
                        <div className="flex flex-col w-72 h-56 rounded-xl bg-gray-900 bg-clip-border text-gray-700 shadow-md">
                        <div className="flex items-center overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white">
                            <h5 id="curl-alternado" className="p-20 font-sans text-xl font-semibold leading-snug tracking-normal text-white antialiased">Curl altern c/manc</h5>
                        </div>
                        <div className="flex gap-x-2 mb-4 m-4 mt-0">
                            <div className="block">
                                <label className="text-gray-400 font-bold text-sm mb-2 block">Series:</label>
                                <input
                                    type="number"
                                    className="flex h-9 w-full rounded-md border-2 bg-background px-2 py-1.5 text-md ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-indigo-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined"
                                    placeholder="12"
                                    min="1" max="6"
                                />
                            </div>
                            <div className="block">
                                <label className="text-gray-400 font-bold text-sm mb-2 block">Reps:</label>
                                <input
                                    type="number"
                                    className="flex h-9 w-full rounded-md border-2 bg-background px-2 py-1.5 text-md ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-indigo-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined"
                                    placeholder="12"
                                    min="6" max="15"
                                />
                            </div>
                            <div className="block">
                                <label className="text-gray-400 font-bold text-sm mb-2 block">Kilos:</label>
                                <input
                                    id="ccvNumber"
                                    type="number"
                                    className="flex h-9 w-full rounded-md border-2 bg-background px-2 py-1.5 text-md ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-indigo-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined"
                                    placeholder="75.5"
                                    min="1" max="300"
                                />
                            </div>
                        </div>
                        <div className="pb-4 pl-2 pt-0">
                            <button
                            className="select-none rounded-lg bg-indigo-400 py-3 px-4 ml-2 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-indigo-400/20 transition-all hover:shadow-lg hover:shadow-indigo-400/30 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                            >
                            Agregar
                            </button>
                        </div>
                        </div>
                        <div className="flex flex-col w-72 h-56 rounded-xl bg-gray-900 bg-clip-border text-gray-700 shadow-md">
                        <div className="flex items-center overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white">
                            <h5 id="curl-inclinado" className="p-20 font-sans text-xl font-semibold leading-snug tracking-normal text-white antialiased">Curl inclinado</h5>
                        </div>
                        <div className="flex gap-x-2 mb-4 m-4 mt-0">
                            <div className="block">
                                <label className="text-gray-400 font-bold text-sm mb-2 block">Series:</label>
                                <input
                                    type="number"
                                    className="flex h-9 w-full rounded-md border-2 bg-background px-2 py-1.5 text-md ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-indigo-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined"
                                    placeholder="12"
                                    min="1" max="6"
                                />
                            </div>
                            <div className="block">
                                <label className="text-gray-400 font-bold text-sm mb-2 block">Reps:</label>
                                <input
                                    type="number"
                                    className="flex h-9 w-full rounded-md border-2 bg-background px-2 py-1.5 text-md ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-indigo-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined"
                                    placeholder="12"
                                    min="6" max="15"
                                />
                            </div>
                            <div className="block">
                                <label className="text-gray-400 font-bold text-sm mb-2 block">Kilos:</label>
                                <input
                                    id="ccvNumber"
                                    type="number"
                                    className="flex h-9 w-full rounded-md border-2 bg-background px-2 py-1.5 text-md ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-indigo-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined"
                                    placeholder="75.5"
                                    min="1" max="300"
                                />
                            </div>
                        </div>
                        <div className="pb-4 pl-2 pt-0">
                            <button
                            className="select-none rounded-lg bg-indigo-400 py-3 px-4 ml-2 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-indigo-400/20 transition-all hover:shadow-lg hover:shadow-indigo-400/30 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                            >
                            Agregar
                            </button>
                        </div>
                        </div>
                        <div className="flex flex-col w-72 h-56 rounded-xl bg-gray-900 bg-clip-border text-gray-700 shadow-md">
                        <div className="flex items-center overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white">
                            <h5 id="curl-scott" className="p-20 font-sans text-xl font-semibold leading-snug tracking-normal text-white antialiased">Curl en banco scott</h5>
                        </div>
                        <div className="flex gap-x-2 mb-4 m-4 mt-0">
                            <div className="block">
                                <label className="text-gray-400 font-bold text-sm mb-2 block">Series:</label>
                                <input
                                    type="number"
                                    className="flex h-9 w-full rounded-md border-2 bg-background px-2 py-1.5 text-md ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-indigo-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined"
                                    placeholder="12"
                                    min="1" max="6"
                                />
                            </div>
                            <div className="block">
                                <label className="text-gray-400 font-bold text-sm mb-2 block">Reps:</label>
                                <input
                                    type="number"
                                    className="flex h-9 w-full rounded-md border-2 bg-background px-2 py-1.5 text-md ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-indigo-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined"
                                    placeholder="12"
                                    min="6" max="15"
                                />
                            </div>
                            <div className="block">
                                <label className="text-gray-400 font-bold text-sm mb-2 block">Kilos:</label>
                                <input
                                    id="ccvNumber"
                                    type="number"
                                    className="flex h-9 w-full rounded-md border-2 bg-background px-2 py-1.5 text-md ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-indigo-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined"
                                    placeholder="75.5"
                                    min="1" max="300"
                                />
                            </div>
                        </div>
                        <div className="pb-4 pl-2 pt-0">
                            <button
                            className="select-none rounded-lg bg-indigo-400 py-3 px-4 ml-2 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-indigo-400/20 transition-all hover:shadow-lg hover:shadow-indigo-400/30 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                            >
                            Agregar
                            </button>
                        </div>
                        </div>
                        <div className="flex flex-col w-72 h-56 rounded-xl bg-gray-900 bg-clip-border text-gray-700 shadow-md">
                        <div className="flex items-center overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white">
                            <h5 id="curl-polea" className="p-20 font-sans text-xl font-semibold leading-snug tracking-normal text-white antialiased">Curl polea baja</h5>
                        </div>
                        <div className="flex gap-x-2 mb-4 m-4 mt-0">
                            <div className="block">
                                <label className="text-gray-400 font-bold text-sm mb-2 block">Series:</label>
                                <input
                                    type="number"
                                    className="flex h-9 w-full rounded-md border-2 bg-background px-2 py-1.5 text-md ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-indigo-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined"
                                    placeholder="12"
                                    min="1" max="6"
                                />
                            </div>
                            <div className="block">
                                <label className="text-gray-400 font-bold text-sm mb-2 block">Reps:</label>
                                <input
                                    type="number"
                                    className="flex h-9 w-full rounded-md border-2 bg-background px-2 py-1.5 text-md ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-indigo-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined"
                                    placeholder="12"
                                    min="6" max="15"
                                />
                            </div>
                            <div className="block">
                                <label className="text-gray-400 font-bold text-sm mb-2 block">Kilos:</label>
                                <input
                                    id="ccvNumber"
                                    type="number"
                                    className="flex h-9 w-full rounded-md border-2 bg-background px-2 py-1.5 text-md ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-indigo-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined"
                                    placeholder="75.5"
                                    min="1" max="300"
                                />
                            </div>
                        </div>
                        <div className="pb-4 pl-2 pt-0">
                            <button
                            className="select-none rounded-lg bg-indigo-400 py-3 px-4 ml-2 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-indigo-400/20 transition-all hover:shadow-lg hover:shadow-indigo-400/30 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                            >
                            Agregar
                            </button>
                        </div>
                        </div>
                        <div className="flex flex-col w-72 h-56 rounded-xl bg-gray-900 bg-clip-border text-gray-700 shadow-md">
                        <div className="flex items-center overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white">
                            <h5 id="curl-simultaneo" className="p-20 font-sans text-xl font-semibold leading-snug tracking-normal text-white antialiased">Curl simult c/mancuerna</h5>
                        </div>
                        <div className="flex gap-x-2 mb-4 m-4 mt-0">
                            <div className="block">
                                <label className="text-gray-400 font-bold text-sm mb-2 block">Series:</label>
                                <input
                                    type="number"
                                    className="flex h-9 w-full rounded-md border-2 bg-background px-2 py-1.5 text-md ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-indigo-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined"
                                    placeholder="12"
                                    min="1" max="6"
                                />
                            </div>
                            <div className="block">
                                <label className="text-gray-400 font-bold text-sm mb-2 block">Reps:</label>
                                <input
                                    type="number"
                                    className="flex h-9 w-full rounded-md border-2 bg-background px-2 py-1.5 text-md ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-indigo-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined"
                                    placeholder="12"
                                    min="6" max="15"
                                />
                            </div>
                            <div className="block">
                                <label className="text-gray-400 font-bold text-sm mb-2 block">Kilos:</label>
                                <input
                                    id="ccvNumber"
                                    type="number"
                                    className="flex h-9 w-full rounded-md border-2 bg-background px-2 py-1.5 text-md ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-indigo-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined"
                                    placeholder="75.5"
                                    min="1" max="300"
                                />
                            </div>
                        </div>
                        <div className="pb-4 pl-2 pt-0">
                            <button
                            className="select-none rounded-lg bg-indigo-400 py-3 px-4 ml-2 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-indigo-400/20 transition-all hover:shadow-lg hover:shadow-indigo-400/30 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                            >
                            Agregar
                            </button>
                        </div>
                        </div>
                        <div className="flex flex-col w-72 h-56 rounded-xl bg-gray-900 bg-clip-border text-gray-700 shadow-md">
                        <div className="flex items-center overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white">
                            <h5 id="curl-concentrado" className="p-20 font-sans text-xl font-semibold leading-snug tracking-normal text-white antialiased">Curl concentrado</h5>
                        </div>
                        <div className="flex gap-x-2 mb-4 m-4 mt-0">
                            <div className="block">
                                <label className="text-gray-400 font-bold text-sm mb-2 block">Series:</label>
                                <input
                                    type="number"
                                    className="flex h-9 w-full rounded-md border-2 bg-background px-2 py-1.5 text-md ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-indigo-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined"
                                    placeholder="12"
                                    min="1" max="6"
                                />
                            </div>
                            <div className="block">
                                <label className="text-gray-400 font-bold text-sm mb-2 block">Reps:</label>
                                <input
                                    type="number"
                                    className="flex h-9 w-full rounded-md border-2 bg-background px-2 py-1.5 text-md ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-indigo-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined"
                                    placeholder="12"
                                    min="6" max="15"
                                />
                            </div>
                            <div className="block">
                                <label className="text-gray-400 font-bold text-sm mb-2 block">Kilos:</label>
                                <input
                                    id="ccvNumber"
                                    type="number"
                                    className="flex h-9 w-full rounded-md border-2 bg-background px-2 py-1.5 text-md ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-indigo-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined"
                                    placeholder="75.5"
                                    min="1" max="300"
                                />
                            </div>
                        </div>
                        <div className="pb-4 pl-2 pt-0">
                            <button
                            className="select-none rounded-lg bg-indigo-400 py-3 px-4 ml-2 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-indigo-400/20 transition-all hover:shadow-lg hover:shadow-indigo-400/30 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                            >
                            Agregar
                            </button>
                        </div>
                        </div>
                        <div className="flex flex-col w-72 h-56 rounded-xl bg-gray-900 bg-clip-border text-gray-700 shadow-md">
                        <div className="flex items-center overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white">
                            <h5 id="flexiones-biceps" className="p-20 font-sans text-xl font-semibold leading-snug tracking-normal text-white antialiased">Flexiones c/polea</h5>
                        </div>
                        <div className="flex gap-x-2 mb-4 m-4 mt-0">
                            <div className="block">
                                <label className="text-gray-400 font-bold text-sm mb-2 block">Series:</label>
                                <input
                                    type="number"
                                    className="flex h-9 w-full rounded-md border-2 bg-background px-2 py-1.5 text-md ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-indigo-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined"
                                    placeholder="12"
                                    min="1" max="6"
                                />
                            </div>
                            <div className="block">
                                <label className="text-gray-400 font-bold text-sm mb-2 block">Reps:</label>
                                <input
                                    type="number"
                                    className="flex h-9 w-full rounded-md border-2 bg-background px-2 py-1.5 text-md ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-indigo-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined"
                                    placeholder="12"
                                    min="6" max="15"
                                />
                            </div>
                            <div className="block">
                                <label className="text-gray-400 font-bold text-sm mb-2 block">Kilos:</label>
                                <input
                                    id="ccvNumber"
                                    type="number"
                                    className="flex h-9 w-full rounded-md border-2 bg-background px-2 py-1.5 text-md ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-indigo-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined"
                                    placeholder="75.5"
                                    min="1" max="300"
                                />
                            </div>
                        </div>
                        <div className="pb-4 pl-2 pt-0">
                            <button
                            className="select-none rounded-lg bg-indigo-400 py-3 px-4 ml-2 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-indigo-400/20 transition-all hover:shadow-lg hover:shadow-indigo-400/30 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                            >
                            Agregar
                            </button>
                        </div>
                    </div>
            </div>         
        </div>
    </>
    )
  }
  
  export default Biceps