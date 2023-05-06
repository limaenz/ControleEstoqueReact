import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TelaPrincipal from './components/TelaPrincipal';
import Login from './components/Login';
import CadastroFuncionario from './components/CadastroFuncionario';
import ConsultaFuncionario from './components/ConsultaFuncionario';
import CadastroFerramenta from './components/CadastroFerramenta';
import ConsultaFerramenta from './components/ConsultaFerramenta';
import RetiradaMaterial from './components/RetiradaMaterial';
import ConsultaProdutos from './components/ConsultaProdutos';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/telaprincipal" element={<TelaPrincipal />} />
        <Route path="/cadastroFuncionario" element={<CadastroFuncionario />} />
        <Route path="/consultaFuncionario" element={<ConsultaFuncionario />} />
        <Route path="/cadastroFerramenta" element={<CadastroFerramenta />} />
        <Route path="/consultaFerramenta" element={<ConsultaFerramenta />} />
        <Route path="/almoxarifado" element={<RetiradaMaterial />} />
        <Route path="/consultaProdutos" element={<ConsultaProdutos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
