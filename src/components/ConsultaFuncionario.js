import React, { useState } from "react";
import "./style/ConsultaFuncionario.css";
import { Link } from "react-router-dom";
import axios from "axios";

function ConsultarFuncionario() {
  const [cpf, setCpf] = useState("");
  const [novoCpf, setNovoCpf] = useState("");
  const [funcionarios, setFuncionarios] = useState([]);
  const [erro, setErro] = useState("");
  const [editing, setEditing] = useState(false);
  const [nome, setNome] = useState("");
  const [botaoEditar, setBotaoEditar] = useState(false);

  const ConsultaFuncionario = (e) => {
    e.preventDefault();

    axios
      .get(`https://localhost:7230/api/Funcionario/${cpf}`, {
        params: { cpf },
      })
      .then((response) => {
        if (botaoEditar != null) {
          setBotaoEditar(false);
        }

        if (editing != null) {
          setEditing(false);
        }

        if (funcionarios == null) {
          setFuncionarios(false);
        }

        if (funcionarios != null) {
          setFuncionarios([response.data]);
          setBotaoEditar(true);
        }

        console.log(response);
      })
      .catch((erro) => {
        setErro(erro.response.data);

        if (botaoEditar != null) {
          setBotaoEditar(false);
        }

        if (editing != null) {
          setEditing(false);
        }

        if (funcionarios != null) {
          setFuncionarios(false);
        }

        console.error("Falha ao encontrar funcionário. Retorno:" + erro);
      });
  };

  const DeletarFuncionario = (e) => {
    e.preventDefault();

    axios
      .delete(`https://localhost:7230/api/Funcionario/${cpf}`, {
        params: { cpf },
      })
      .then((response) => {
        console.log(response);
        setFuncionarios([response.data]);
        alert("Funcionário removido!");
        window.location.reload();
      })
      .catch((erro) => {
        console.error("Falha ao deletar funcionário. Retorno:" + erro);
      });
  };

  const AtualizarFuncionario = (e) => {
    e.preventDefault();

    axios
      .put(`https://localhost:7230/api/Funcionario/${cpf}`, {
        nome: nome,
        cpf: novoCpf,
      })
      .then((response) => {
        console.log(response);

        setFuncionarios([response.data]);
        alert("Dados atualizados.");
        window.location.reload();
      })
      .catch((erro) => {
        alert("É necessário preencher os campos para atualizar os dados.");
        console.error("Falha ao atualizar funcionário. Retorno:" + erro);
      });

    setEditing(false);
  };

  return (
    <div className="container-consulta-funcionario">
      <form className="formulario-consulta-funcionario">
        <h1 className="title">Consultar Funcionário</h1>

        <label htmlFor="cpf">CPF*:</label>
        <input
          type="number"
          id="cpf"
          name="cpf"
          value={cpf}
          placeholder="Insira CPF do funcionário"
          onChange={(e) => setCpf(e.target.value)}
          required
        />

        <div>
          <button
            className="button"
            type="submit"
            onClick={ConsultaFuncionario}
          >
            Buscar
          </button>
          <Link to="/telaprincipal">
            <button className="button">Voltar</button>
          </Link>
        </div>

        <div className="resultado">
          {funcionarios != "" ? (
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Senha</th>
                  <th>CPF</th>
                  <th>Cargo</th>
                </tr>
              </thead>
              <tbody>
                {funcionarios.map((funcionario) => (
                  <tr key={funcionario.id}>
                    <td>{funcionario.nome}</td>
                    <td>{funcionario.senha}</td>
                    <td>{funcionario.cpf}</td>
                    <td>{funcionario.cargo}</td>
                    <button className="apagar" onClick={DeletarFuncionario}>
                      Remover
                    </button>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="erro">{erro}</p>
          )}
        </div>

        {editing ? (
          <div>
            <label className="subtitulo-consulta-funcionario">
              Atualize os dados abaixo:
            </label>

            <input
              className="atualizar"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Nome"
              required
            />
            <input
              className="atualizar"
              type="text"
              value={novoCpf}
              onChange={(e) => setNovoCpf(e.target.value)}
              placeholder="CPF"
              required
            />
            <button className="button" onClick={AtualizarFuncionario}>
              Atualizar
            </button>
          </div>
        ) : (
          ""
        )}

        {botaoEditar ? (
          <div>
            <button className="button" onClick={() => setEditing(true)}>
              Editar
            </button>
          </div>
        ) : (
          ""
        )}
      </form>
    </div>
  );
}

export default ConsultarFuncionario;
