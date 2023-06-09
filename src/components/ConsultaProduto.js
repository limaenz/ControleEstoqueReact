import React, { useState } from "react";
import "./style/ConsultaProduto.css";
import { Link } from "react-router-dom";
import axios from "axios";

function ConsultarProduto() {
  const [codigo, setCodigo] = useState("");
  const [produtos, setProdutos] = useState([]);
  const [erro, setErro] = useState([]);

  const ConsultaProdutos = (e) => {
    e.preventDefault();

    axios
      .get(`https://localhost:7230/api/Produto/${codigo}`, {
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
      <form className="formulario-consulta-produto" onSubmit={ConsultaProdutos}>
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
                  <th>Nome</th>
                  <th>Descrição</th>
                  <th>Quantidade</th>
                </tr>
              </thead>
              <tbody>
                {produtos.map((produto) => (
                  <tr key={produto.id}>
                    <td>{produto.codigo}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.descricao}</td>
                    <td>{produto.quantidade}</td>
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

export default ConsultarProduto;
