import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaPrincipal from './paginas/PaginaPrincipal';
import Header from './components/Header';
import Galeria from './components/Galeria';
import ArmaRutina from './paginas/ArmaRutina';
import MiRutina from './paginas/MiRutina';
import Progreso from './paginas/Progreso';
import Biceps from './components/Biceps';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPrincipal />}>
          <Route index element={<Header />} />
        </Route>
        <Route path="galeria" element={<Galeria />} />
        <Route path="arma-tu-rutina" element={<ArmaRutina />} />
        <Route path="mi-rutina" element={<MiRutina />} />
        <Route path="progreso" element={<Progreso />} />
        <Route path="biceps" element={<Biceps />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
