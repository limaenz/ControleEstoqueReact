import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style/Login.css";

function Login() {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://localhost:7230/api/Funcionario/login", { cpf, senha })
      .then((response) => {
        console.log(response.data);
        navigate("/telaprincipal");
      })
      .catch((error) => {
        console.error(error);
        setError("Erro: CPF ou senha incorreta.");
      });
  };

  return (
    <body className="body">
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h1 className="titulo">Login</h1>
          <label>
            CPF:
            <input
              type="text"
              value={cpf}
              placeholder="Insira seu CPF"
              onChange={(e) => setCpf(e.target.value)}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={senha}
              placeholder="Insira sua senha"
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </label>
          {error && <p className="erro">{error}</p>}
          <button type="submit">Entrar</button>
        </form>
      </div>
    </body>
  );
}

export default Login;
