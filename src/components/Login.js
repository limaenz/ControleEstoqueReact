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
        setError("CPF or password is invalid");
      });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        {error && <p>{error}</p>}
        <label>
          CPF:
          <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
