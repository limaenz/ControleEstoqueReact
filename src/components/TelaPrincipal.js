import React from 'react';
import './style/TelaPrincipal.css';
import { Link } from 'react-router-dom';

function TelaPrincipal() {
  return (
    <div className="container">
      <h1 className="titulo-tela-principal">Controle de estoque</h1>
      <h3> 
      <Link to="/cadastroFuncionario"> <button className='buttons'> Cadastrar Funcionário </button> </Link>
      <Link to="/cadastroProduto"> <button className='buttons'> Cadastrar Produto </button> </Link>
      <Link to="/cadastroEstoque"> <button className='buttons'> Cadastrar Estoque </button> </Link>
      </h3>
      <h4> 
      <Link to="/consultaFuncionario"> <button className='buttons'> Consultar Funcionário </button> </Link>
      <Link to="/consultaProduto"> <button className='buttons'> Consultar Produto </button> </Link>
      <Link to="/consultaEstoque"> <button className='buttons'> Consultar Estoque </button> </Link>
      </h4>
    </div>
  );
}

export default TelaPrincipal;
