import { Link } from 'react-router-dom'

const Footer = () => {
  return (
        <header className="py-10 bg-gray-900">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
                <h1 className="font-bold text-xl text-indigo-200 hover:cursor-pointer">
                    Administrador de Progreso de {''} 
                    <span className="text-white font-black hover:cursor-pointer">Gimnasio</span> 
                </h1>
                <nav className='flex flex-col items-center lg:flex-row gap-4 mt-5 lg:mt-0'>
                    <Link to="/arma-tu-rutina" className='text-white opacity-90 text-base font-bold hover:text-white hover:opacity-100'>Arma tu rutina</Link>
                    <Link to="/mi-rutina" className='text-white opacity-90 text-base font-bold hover:text-white hover:opacity-100'>Mi Rutina</Link>
                    <Link to="/progreso" className='text-white opacity-90 text-base font-bold hover:text-white hover:opacity-100'>Progreso</Link>

                    <button 
                        type="button"
                        className='text-white opacity-90 text-base font-bold px-5 py-2 rounded-full bg-gray-950 hover:bg-gray-700 hover:text-white'
                    >Cerrar Sesión</button>
                </nav>
            </div>
        </header>
  )
};

export default Footer;