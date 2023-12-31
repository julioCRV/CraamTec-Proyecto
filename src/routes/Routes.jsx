import {Routes, Route, Navigate} from 'react-router-dom';

import Inicio from '../components/HeaderSecciones/Inicio/Inicio';
import Eventos from '../components/HeaderSecciones/Eventos/Eventos';
import Participaciones from '../components/HeaderSecciones/Participaciones/Participaciones';
import Integrantes from '../components/HeaderSecciones/Integrantes/Integrantes';
import Colaboradores from '../components/HeaderSecciones/Colaboradores/Colaboradores';
import Servicios from '../components/HeaderSecciones/Servicios/Servicios';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/inicio" />} />
            <Route path='/inicio' element={<Inicio/>}/>
            <Route path='/eventos' element={<Eventos/>}/>
            <Route path='/participaciones' element={<Participaciones/>}/>
            <Route path='/integrantes' element={<Integrantes/>}/>
            <Route path='/colaboradores' element={<Colaboradores/>}/>
            <Route path='/servicios' element={<Servicios/>}/>
        </Routes>
    );
} 
export default Router; 