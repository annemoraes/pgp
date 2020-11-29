import React from 'react';
import { Link } from 'react-router-dom'

import Check from '../../assets/images/check.svg';

import './styles.css';


function CRegister() { 
  return (
    <div id="page-cregister">
      <div className="container">
        <img src={Check} alt="check" />
        <h1>Cadastro Concluído</h1>
        <p>Agora você faz parte da plataforma Ajudaki. Tenha uma ótima experiência.</p>
        <Link to="/landing" className="to-landing">
          <button type="button">Iniciar</button>
        </Link>  
      </div>
    </div>
  )
}

export default CRegister;