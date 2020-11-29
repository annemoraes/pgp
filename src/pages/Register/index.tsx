import React from 'react';
import { Link } from 'react-router-dom'
import Input from '../../components/Input';

import Logo from '../../assets/images/ajudaki.svg';

import './styles.css';


function Register() { 
  return (
    <div id="page-register">
      <div className="info">
        <div className="logo-container">
          <img src={Logo} alt="Ajudaki" />
          <p>Plataforma de monitorias online</p> 
          <p>Seja um monitor ou encontre um!</p>
        </div>
      </div>
      <div className="form">
        <div className="form-container">
          <h2>Cadastro</h2>
          <p className="subtitle">Faça seu cadastro gratuitamente</p>
          <Input 
              name="name" 
              label="Nome completo"
            />
            <Input 
              name="email" 
              label="email"
            />
            <Input 
              name="senha" 
              label="senha"
              type="password"
            />
          <Link to="/concluded" className="button-link">
            <button type="button">Concluir cadastro</button>
          </Link>
          
        </div>
      </div>
    </div>
  )
}

export default Register;