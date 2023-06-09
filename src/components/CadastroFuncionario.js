import React, { useState } from "react";
import './style/CadastroFuncionario.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CadastroFuncionario() {
  const [cpf, setCPF] = useState("");
  const [nome, setNome] = useState("");  
  const [senha, setSenha] = useState("");  
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");
  const [cargo, setCargo] = useState("");

  const CadastraFuncionario = (e) => {
    e.preventDefault();
  
  axios.post("https://localhost:7230/api/Funcionario", {nome, cargo, cpf, senha})
    .then((response) => {

      console.log(response.data);
      setSucesso("Cadastro realizado com sucesso!");
      LimparCampos();
    })
  .catch((erro) => {
    console.error(erro);
    setErro(erro.response.data);
    LimpaErros();
  });
};

const LimparCampos = () => {
  setCPF("");
  setNome("");
  setSenha("");
  setCargo("");
  setErro("");
};

const LimpaErros = () => {
setSucesso("");
}
  return (
    <div className="container">
      <h1 className="title">Cadastro Funcionario</h1>
      <form className='form' onSubmit={CadastraFuncionario}> 

      <label htmlFor='nome'>Nome*:</label>
      <input type='nome'
      id='nome'
      name='nome'
      value={nome}
      placeholder="Insira seu nome"
      onChange={(e) => setNome(e.target.value)}
      required/>

      <label htmlFor='cargo'>Cargo*:</label>
      <input type='cargo'
      id='cargo'
      name='cargo'
      value={cargo}
      placeholder="Insira seu cargo"
      onChange={(e) => setCargo(e.target.value)}
      required/>
      
      <label htmlFor='cpf'>CPF*:</label>
      <input type='text'
      id='cpf'
      name='cpf'
      value={cpf}
      placeholder="Insira seu CPF"
      onChange={(e) => setCPF(e.target.value)}
      required/>
      
      <label htmlFor='password'>Senha*:</label>
      <input type='password'
      id='password'
      name='password'
      value={senha}
      placeholder="Insira sua senha"
      onChange={(e) => setSenha(e.target.value)}
      required/>

      {erro && <p className="erro">{erro}</p>}
      {sucesso && <p className="sucesso">{sucesso}</p>}

      <button className='button' type='submit'> Cadastrar </button>
      <Link to="/telaprincipal"> <button className='button'> Voltar </button> </Link>
      </form>
    </div>
  );
}
export default CadastroFuncionario;
