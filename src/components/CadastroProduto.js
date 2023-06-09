import React, { useState } from "react";
import './style/CadastroProduto.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CadastroFerramenta() {
  const [codigo, setCodigo] = useState("");
  const [nome, setNome] = useState("");  
  const [descricao, setDescricao] = useState("");  
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");
  const [quantidade, setQuantidade] = useState("");

  const CadastraFuncionario = (e) => {
    e.preventDefault();
  
  axios.post("https://localhost:7230/api/Produto", {codigo, descricao, nome, quantidade})
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
  setCodigo("");
  setNome("");
  setDescricao("");
  setQuantidade("");
  setErro("");
};

const LimpaErros = () => {
setSucesso("");
}
  return (
    <div className="container">
      <h1 className="title">Cadastar Produto</h1>
      <form className='form' onSubmit={CadastraFuncionario}> 

      <label htmlFor='codigo'>Codigo*:</label>
      <input type='codigo'
      id='codigo'
      name='codigo'
      value={codigo}
      placeholder="Insira o codigo"
      onChange={(e) => setCodigo(e.target.value)}
      required/>

      <label htmlFor='nome'>Nome*:</label>
      <input type='nome'
      id='nome'
      name='nome'
      value={nome}
      placeholder="Insira o nome"
      onChange={(e) => setNome(e.target.value)}
      required/>
      
      <label htmlFor='descricao'>Descricao*:</label>
      <input type='descricao'
      id='descricao'
      name='descricao'
      value={descricao}
      placeholder="Insira a descricao"
      onChange={(e) => setDescricao(e.target.value)}
      required/>
      
      <label htmlFor='Quantidade'>Quantidade*:</label>
      <input type='number'
      id='quantidade'
      name='quantidade'
      value={quantidade}
      placeholder="Insira a quantidade"
      onChange={(e) => setQuantidade(e.target.value)}
      required/>

      {erro && <p className="erro">{erro}</p>}
      {sucesso && <p className="sucesso">{sucesso}</p>}

      <button className='button' type='submit'> Cadastrar </button>
      <Link to="/telaprincipal"> <button className='button'> Voltar </button> </Link>
      </form>
    </div>
  );
}
export default CadastroFerramenta;
