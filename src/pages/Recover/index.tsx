import React from 'react';
import { Link } from 'react-router-dom'
import Input from '../../components/Input';

import Logo from '../../assets/images/ajudaki.svg';

import './styles.css';


function Recover() { 
  return (
    <div id="page-recover">
    <div className="info">
      <div className="logo-container">
        <img src={Logo} alt="Ajudaki" />
        <p>Plataforma de monitorias online</p> 
        <p>Seja um monitor ou encontre um!</p>
      </div>
    </div>
    <div className="form">
      <div className="form-container">
        <h2>Eita, esqueceu sua senha?</h2>
        <p>Receba um código de recuperação pelo email</p>
    
          <Input 
            name="email" 
            label="email"
          />
          
        <Link to="/concluded-password" className="button-link">
          <button type="button">Enviar email</button>
        </Link>
        
      </div>
    </div>
  </div>
  )
}

export default Recover;