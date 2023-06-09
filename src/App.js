import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TelaPrincipal from './components/TelaPrincipal';
import Login from './components/Login';
import CadastroFuncionario from './components/CadastroFuncionario';
import CadastroProduto from './components/CadastroProduto';
import CadastroEstoque from './components/CadastroEstoque';
import ConsultaFuncionario from './components/ConsultaFuncionario';
import ConsultaEstoque from './components/ConsultaEstoque';
import ConsultaProduto from './components/ConsultaProduto';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/telaprincipal" element={<TelaPrincipal />} />
        <Route path="/cadastroFuncionario" element={<CadastroFuncionario />} />
        <Route path="/cadastroProduto" element={<CadastroProduto />} />
        <Route path="/cadastroEstoque" element={<CadastroEstoque />} />
        <Route path="/consultaFuncionario" element={<ConsultaFuncionario />} />
        <Route path="/consultaProduto" element={<ConsultaProduto />} />
        <Route path="/consultaEstoque" element={<ConsultaEstoque />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
