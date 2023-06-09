import React, { useState } from "react";
import "./style/ConsultaEstoque.css";
import { Link } from "react-router-dom";
import axios from "axios";

function ConsultarEstoque() {
  const [codigo, setCodigo] = useState("");
  const [produtos, setProdutos] = useState([]);
  const [erro, setErro] = useState([]);

  const ConsultaProdutos = (e) => {
    e.preventDefault();

    axios
      .get(`https://localhost:7230/api/Estoque/${codigo}`, {
        params: { codigo },
      })
      .then((response) => {
        console.log(response);
        setProdutos([response.data]);
        setErro("Erro: Nenhum produto encontrado.");
      })
      .catch((erro) => {
        console.error("Falha ao encontrar produto. Retorno:" + erro);
      });
  };

  return (
    <div className="container">
      <form className="form" onSubmit={ConsultaProdutos}>
        <h1 className="title">Consultar Produto</h1>

        <label htmlFor="codigo">Código*:</label>
        <input
          type="text"
          id="codigo"
          name="codigo"
          value={codigo}
          placeholder="Insira o código"
          onChange={(e) => setCodigo(e.target.value)}
          required
        />

        <div>
          <button className="button" type="submit">
            Buscar
          </button>
          <Link to="/telaprincipal">
            <button className="button">Voltar</button>
          </Link>
        </div>

        <div className="resultado">
          {produtos != "" ? (
            <table>
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Código Item</th>
                  <th>Quantidae</th>
                  <th>Preço unitário</th>
                  <th>Nome do Funcionário</th>
                  <th>Data de Entrada</th>
                  <th>Data de Saída</th>
                </tr>
              </thead>
              <tbody>
                {produtos.map((estoque) => (
                  <tr key={estoque.id}>
                    <td>{estoque.codigo}</td>
                    <td>{estoque.codigoItem}</td>
                    <td>{estoque.quantidade}</td>
                    <td>{estoque.precoUnitario}</td>
                    <td>{estoque.nomeFuncionario}</td>
                    <td>{estoque.dataDeEntrada}</td>
                    <td>{estoque.dataDeSaida}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="erro">{erro}</p>
          )}
        </div>
      </form>
    </div>
  );
}

export default ConsultarEstoque;
