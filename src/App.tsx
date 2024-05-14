
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import './App.css';
import { GlobalStorage } from './GlobalContext';
import Home from './Home/Home';
import RotasProtegidas from './ProtectRoutes';
import Painel from './Painel/Painel';
import Documentacao from './Documentacao/Documentacao';
import Dashboard from './Dashboard/Dashboard';
import Relatorio from './Relatorio/Relatorio';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStorage>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/home' element={
              <RotasProtegidas>
                <Home />
              </RotasProtegidas>} />
            <Route path='/painel' element={
              <RotasProtegidas>
                <Painel />
              </RotasProtegidas>} />
            <Route path='/documentacao' element={
              <RotasProtegidas>
                <Documentacao />
              </RotasProtegidas>} />
            <Route path='/dashboard' element={
              <RotasProtegidas>
                <Dashboard />
              </RotasProtegidas>} />
            <Route path='/relatorio' element={
              <RotasProtegidas>
                <Relatorio />
              </RotasProtegidas>} />
          </Routes>
        </GlobalStorage>
      </BrowserRouter >
    </>
  )
}

export default App
