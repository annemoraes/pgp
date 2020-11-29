import React from 'react';
import { Link } from 'react-router-dom'

import Check from '../../assets/images/check.svg';

import './styles.css';


function CRecover() { 
  return (
    <div id="page-crecover">
      <div className="container">
        <img src={Check} alt="check" />
        <h1>Redefinição enviada!</h1>
        <p>Agora é só checar o e-mail que foi enviado para você redefinir sua senha.</p>
        <Link to="/" className="login">
          <button type="button">Voltar para login</button>
        </Link>  
      </div>
    </div>
  )
}

export default CRecover;