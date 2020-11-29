import React from 'react';
import { Link } from 'react-router-dom'
import Input from '../../components/Input';

import Logo from '../../assets/images/ajudaki.svg';

import './styles.css';


function Login() { 
  return (
    <div id="page-login">
      <div className="info">
        <div className="logo-container">
          <img src={Logo} alt="Ajudaki" />
          <p>Plataforma de monitorias online</p> 
          <p>Seja um monitor ou encontre um!</p>
        </div>
      </div>
      <div className="form">
        <div className="form-container">
          <h2>Fazer Login</h2>
          <Input 
              name="email" 
              label="email"
            />
            <Input 
              name="senha" 
              label="senha"
              type="password"
            />
          <div className="pw-container">
            <input className="input" type="checkbox" />
            <p>Lembrar-me</p>
            <div className="space"></div>
            <Link to="/recover" className="pw-link">
              <p>Esqueci minha senha</p>
            </Link>  
          </div>
          <Link to="/landing" className="to-landing">
            <button type="button">Entrar</button>
          </Link>  
          <p>Não tem uma conta? 
            <Link to="/register" className="register-link">
              <span className="register">   Cadastre-se</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login;