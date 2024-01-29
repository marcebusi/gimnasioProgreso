import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

interface ImageStyle {
    height: string;
    width: string;
    objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
    borderRadius: string;
    boxShadow: string;
}
const PaginaPrincipal: React.FC = () => {
    const imageStyle: ImageStyle = {
        height: "300px",
        width: "100%",
        objectFit: "cover",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    };
  return (
    <>
        <Outlet />
        <section className="relative py-32 lg:py-36 bg-gray-950">
            <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12 mb-80">
                <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block">
                    <span
                        className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-indigo-400 blur-xl opacity-60 lg:opacity-95 lg:block hidden"></span>
                    <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-indigo-400 blur-xl opacity-80"></span>
                </div>
                <span
                    className="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-blue-600 to-indigo-400 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90"></span>
                <div className="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 
                    lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">

                    <h1 className="text-3xl leading-tight sm:text-4xl md:text-5xl xl:text-6xl
                    font-bold text-white opacity-90">
                        Registra tus <span
                            className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-indigo-600">Progresos </span>
                        en el Gimnasio
                    </h1>
                    <p className="mt-8 text-gray-600">
                        Gestiona tu rutina diaria, almacena y observa tu evolución semana a semana mediante gráficos de mejoras y porcentajes 
                    </p>
                    <div className="mt-10  w-full flex max-w-md mx-auto lg:mx-0">
                        <div className="flex sm:flex-row flex-col gap-5 w-full">
                            <form action="#"
                                className="py-1 pl-6 w-full pr-1 flex gap-3 items-center text-gray-600 shadow-lg shadow-gray-200/20
                                    border border-gray-200 bg-gray-900 rounded-full ease-linear focus-within:bg-gray-800  focus-within:border-indigo-600">
                                <span className="min-w-max pr-2 border-r border-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
                                    </svg>
                                </span>
                                <input type="email" name="" id="" placeholder="tomasgarcia@gmail.com"
                                    className="w-full py-3 outline-none bg-transparent"/>
                                <button className="flex text-white justify-center items-center w-max min-w-max sm:w-max px-6 h-12 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear
                                        after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-indigo-800 hover:after:opacity-100 hover:after:scale-[2.5] bg-indigo-600 border-transparent hover:border-[#172554]">
                                    <span className="hidden sm:flex relative z-[5]">
                                        Registrate
                                    </span>
                                    <span className="flex sm:hidden relative z-[5]">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                        </svg>
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
                    <img src="https://hips.hearstapps.com/hmg-prod/images/dumbbell-1649167008.jpg" alt="Hero image" width="2350" height="2359"
                        className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96" />
                </div>
            </div>
        </section>
        <div className="bg-gray-950">
            <section>
                <h2 className="text-4xl tracking-tight text-center font-extrabold sm:text-5xl text-white opacity-90">Observar tus mejoras es fundamental.</h2>
                <figure>
                    <blockquote>
                        <p className="mt-6 max-w-3xl mx-auto text-lg text-white opacity-60">"Esta comprobado científicamente que mantener un control de seguimiento de las series, repeticiones y el peso que cargas es fundamental para lograr un progreso más efectivo en el gimnasio. Es crucial que cada mínima mejora sea documentada para ir hacia otro nivel."</p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center justify-center space-x-4 text-left">
                       <img src="https://img.freepik.com/fotos-premium/concepto-estilo-vida-personas-retrato-primer-plano-joven-feliz-sonriendo-sobre-fondo-blanco_118342-32993.jpg" className="w-14 h-14 rounded-full" loading="lazy" decoding="async"/> 
                       <div className="flex flex-col">
                        <div className="text-white opacity-90 font-semibold dark:text-white">Marcelo Busignani</div>
                        <div className="mt-0.5 text-sm leading-6 text-white opacity-60">Creador de Progreso de Gimnasio</div>
                       </div>
                    </figcaption>
                </figure>
            </section>
            <div className="flex justify-center p-72">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-4 relative">
                <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block">
                    <span
                        className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-indigo-400 blur-xl opacity-60 lg:opacity-95 lg:block hidden"></span>
                    <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-blue-600 blur-xl opacity-80"></span>
                </div>
                <span
                    className="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-blue-600 to-indigo-400 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90"></span>
                    <div className='brightness-[0.8] hover:brightness-[0.9] w-60 hover:cursor-pointer transition-transform transform hover:scale-105'>
                        <img
                        style={imageStyle}
                        className='hover:cursor-pointer'
                        src="https://i.blogs.es/b58013/1366_2000---2022-06-09t162740.648/450_1000.webp"
                        alt="bicep"
                        />
                        <div className='absolute bottom-0 px-4 py-3 hover:cursor-pointer'>
                        <h1 className="text-white italics text-2xl">Biceps</h1>
                        </div>
                    </div>
                    <div className='brightness-[0.8] hover:brightness-[0.9] w-60 hover:cursor-pointe transition-transform transform hover:scale-105'>
                        <img
                        style={imageStyle}
                        className='hover:cursor-pointer'
                        src="https://i.blogs.es/5f213d/1366_2000/450_1000.jpg"
                        alt="tricep"
                        />
                        <div className='absolute bottom-0 px-4 py-3 hover:cursor-pointer'>
                        <h1 className="text-white italics text-2xl">Triceps</h1>
                        </div>
                    </div>
                    <div className='brightness-[0.8] hover:brightness-[0.9] w-60 hover:cursor-pointe transition-transform transform hover:scale-105'>
                        <img
                        style={imageStyle}
                        className='hover:cursor-pointer'
                        src="https://www.cambiatufisico.com/wp-content/uploads/entrenamiento-hombro-1.jpg"
                        alt="hombro"
                        />
                        <div className='absolute bottom-0 px-4 py-3 hover:cursor-pointer'>
                            <h1 className="text-white italics text-2xl">Hombro</h1>
                        </div>
                    </div>
                    <div className='brightness-[0.8] hover:brightness-[0.9] w-60 hover:cursor-pointe transition-transform transform hover:scale-105'>
                        <img
                        style={imageStyle}
                        className='hover:cursor-pointer'
                        src="https://i.blogs.es/bd6928/istock-526806837/1366_2000.jpeg"
                        alt="pecho"
                        />
                        <div className='absolute bottom-0 px-4 py-3 hover:cursor-pointer'>
                            <h1 className="text-white italics text-2xl">Pecho</h1>
                        </div>
                    </div>
                    <div className='brightness-[0.8] hover:brightness-[0.9] w-60 hover:cursor-pointe transition-transform transform hover:scale-105'>
                        <img
                        style={imageStyle}
                        className='hover:cursor-pointer'
                        src="https://media.glamour.mx/photos/644059493edc840ed9c5cfeb/16:9/w_2560%2Cc_limit/sentadilla_atg.jpg"
                        alt="pierna"
                        />
                        <div className='absolute bottom-0 px-4 py-3 hover:cursor-pointer'>
                            <h1 className="text-white italics text-2xl">Pierna</h1>
                        </div>
                    </div>
                    <div className='brightness-[0.8] hover:brightness-[0.9] w-60 hover:cursor-pointe transition-transform transform hover:scale-105'>
                        <img
                        style={imageStyle}
                        className='hover:cursor-pointer'
                        src="https://www.cambiatufisico.com/wp-content/uploads/rutinas-abdominales.jpg"
                        alt="abdominal"
                        />
                        <div className='absolute bottom-0 px-4 py-3 hover:cursor-pointer'>
                            <h1 className="text-white italics text-2xl">Abdominal</h1>
                        </div>
                    </div>
                    <div className='brightness-[0.8] hover:brightness-[0.9] w-60 hover:cursor-pointe transition-transform transform hover:scale-105'>
                        <img
                        style={imageStyle}
                        className='hover:cursor-pointer'
                        src="https://cdn.shopify.com/s/files/1/0425/7667/4983/files/3_b14557b5-9a37-48c5-b22d-8fc64e53f993.png?v=1700570981"
                        alt="espalda"
                        />
                        <div className='absolute bottom-0 px-4 py-3 hover:cursor-pointer'>
                            <h1 className="text-white italics text-2xl">Espalda</h1>
                        </div>
                    </div>
                    <div className='brightness-[0.8] hover:brightness-[0.9] w-60 hover:cursor-pointe transition-transform transform hover:scale-105'>
                        <img
                        style={imageStyle}
                        className='hover:cursor-pointer'
                        src="https://hips.hearstapps.com/hmg-prod/images/315297042-1090491751659559-9137196433167665724-n-1-1669279063.jpg?crop=1xw:0.75xh;center,top&resize=1200:*"
                        alt="gluteo"
                        />
                        <div className='absolute bottom-0 px-4 py-3 hover:cursor-pointer'>
                            <h1 className="text-white italics text-2xl">Gluteo</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default PaginaPrincipal