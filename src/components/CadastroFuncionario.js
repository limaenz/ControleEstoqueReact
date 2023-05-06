import React from 'react';
import './style/CadastroFuncionario.css';
import { Link } from 'react-router-dom';

function CadastroFuncionario() {
  return (
    <div className="container">
      <h1 className="title">Cadastro Funcionario</h1>
      <form className='form'> 
      
      <label htmlFor='nome'>Nome *</label>
      <input type='nome'
      id='nome'
      name='nome'
      required/>

      <label htmlFor='cargo'>Cargo *</label>
      <input type='cargo'
      id='cargo'
      name='cargo'
      required/>
      
      <label htmlFor='cpf'>CPF *</label>
      <input type='text'
      id='cpf'
      name='cpf'
      pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
      required/>
      
      <label htmlFor='password'>Senha *</label>
      <input type='password'
      id='password'
      name='password'
      required/>
      
      <Link to="/telaprincipal"> <button className='button'> Cadastrar </button> </Link>
      </form>
    </div>
  );
}

export default CadastroFuncionario;
