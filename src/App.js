import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TelaPrincipal from './components/TelaPrincipal';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TelaPrincipal />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
