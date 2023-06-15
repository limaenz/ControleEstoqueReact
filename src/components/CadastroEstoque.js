import React, { useState } from "react";
import './style/CadastroEstoque.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CadastroEstoque() {
  const [codigo, setCodigo] = useState("");
  const [codigoItem, setCodigoItem] = useState("");  
  const [quantidade, setQuantidade] = useState("");
  const [precoUnitario, setPrecoUnitario] = useState("");  
  const [nomeFuncionario, setNomeFuncionario] = useState("");  
  const [dataDeEntrada, setDataDeEntrada] = useState("");  
  const [dataDeSaida, setDataDeSaida] = useState("");  

  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");

  const CadastraFuncionario = (e) => {
    e.preventDefault();
  
  axios.post("https://localhost:7230/api/Estoque",
  {codigo: codigo, codigoItem: codigoItem, quantidade: quantidade, precoUnitario: precoUnitario, nomeFuncionario: nomeFuncionario, dataDeEntrada: dataDeEntrada, dataDeSaida: dataDeSaida})
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
  setCodigoItem("");
  setQuantidade("");
  setPrecoUnitario("");
  setNomeFuncionario("");
  setDataDeEntrada("");
  setDataDeSaida("");
  setErro("");
};

const LimpaErros = () => {
setSucesso("");
}
  return (
    <div className="container-cadastro-estoque">
      <h1 className="titulo-cadastro-estoque">Cadastar estoque</h1>
      <form className='form' onSubmit={CadastraFuncionario}> 

      <label htmlFor='codigo'>Codigo*:</label>
      <input type='codigo'
      id='codigo'
      name='codigo'
      value={codigo}
      placeholder="Insira o codigo"
      onChange={(e) => setCodigo(e.target.value)}
      required/>

      <label htmlFor='codigoItem'>Codigo do item*:</label>
      <input type='codigoItem'
      id='codigoItem'
      name='codigoItem'
      value={codigoItem}
      placeholder="Insira o código do item"
      onChange={(e) => setCodigoItem(e.target.value)}
      required/>

      <label htmlFor='Quantidade'>Quantidade*:</label>
      <input type='number'
      id='quantidade'
      name='quantidade'
      value={quantidade}
      placeholder="Insira a quantidade"
      onChange={(e) => setQuantidade(e.target.value)}
      required/>

      <label htmlFor='precoUnitario'>Preço unitário*:</label>
      <input type='number'
      id='precoUnitario'
      name='precoUnitario'
      value={precoUnitario}
      placeholder="Insira o preço unitário"
      onChange={(e) => setPrecoUnitario(e.target.value)}
      required/>

      <label htmlFor='nomeFuncionario'>Nome funcionário*:</label>
      <input type='nomeFuncionario'
      id='nomeFuncionario'
      name='nomeFuncionario'
      value={nomeFuncionario}
      placeholder="Insira o nome funcionário"
      onChange={(e) => setNomeFuncionario(e.target.value)}
      required/>

      <label htmlFor='dataDeEntrada'>Data de entrada*:</label>
      <input type='date'
      id='dataDeEntrada'
      name='dataDeEntrada'
      value={dataDeEntrada}
      placeholder="Insira a data de entrada"
      onChange={(e) => setDataDeEntrada(e.target.value)}
      required/>

      <label htmlFor='dataDeSaida'>Data de saída*:</label>
      <input type='date'
      id='dataDeSaida'
      name='dataDeSaida'
      value={dataDeSaida}
      placeholder="Insira a data de saída"
      onChange={(e) => setDataDeSaida(e.target.value)}
      required/>
      {erro && <p className="erro">{erro}</p>}
      {sucesso && <p className="sucesso">{sucesso}</p>}
      
      <button className='button' type='submit'> Cadastrar </button>
      <Link to="/telaprincipal"> <button className='button'> Voltar </button> </Link>
      </form>
    </div>
  );
}
export default CadastroEstoque;
