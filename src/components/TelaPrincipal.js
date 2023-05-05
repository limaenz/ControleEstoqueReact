import React from 'react';
import { Link } from 'react-router-dom';
import './TelaPrincipal.css';

function TelaPrincipal() {
  return (
    <div className="container">
      <h1 className="title">Controle de estoque</h1>
      <h1 className="subtitle">Tela principal</h1>
      <Link to="/login" className="button">Login</Link>
    </div>
  );
}

export default TelaPrincipal;
