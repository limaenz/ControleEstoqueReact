import React from 'react';
import './style/TelaPrincipal.css';
import { Link } from 'react-router-dom';

function TelaPrincipal() {
  return (
    <div className="container">
      <h1 className="title">Controle de estoque</h1>
      <h1 className="subtitle">Tela principal</h1>
      <Link to="/cadastroFuncionario"> <button className='buttons'> Cadastro Funcionário </button> </Link>
      <Link to="/consultaFuncionario"> <button className='buttons'> Consulta Funcionário </button> </Link>
      <Link to="/cadastroFerramenta"> <button className='buttons'> Cadastro Ferramenta </button> </Link>
      <Link to="/consultaFerramenta"> <button className='buttons'> Consulta Ferramenta </button> </Link>
      <Link to="/almoxarifado"> <button className='buttons'> Almoxarifado </button> </Link>
      <Link to="/consultaProdutos"> <button className='buttons'> Consulta Produtos/Materiais Liberados </button> </Link>
    </div>
  );
}

export default TelaPrincipal;
