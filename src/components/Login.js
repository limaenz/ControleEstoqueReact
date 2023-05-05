import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <div className="container">
      <h1 className="title">Login</h1>
      <form className="form">
        <label htmlFor="email">CPF *</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="password">Senha *</label>
        <input type="password" id="password" name="password" required />
        <button type="submit" className="button">Entrar</button>
      </form>
      <Link to=".." className="button">Voltar</Link>
    </div>
  );
}

export default Login;
