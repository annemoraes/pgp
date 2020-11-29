import React from 'react';
import { Link } from 'react-router-dom'

import Logo from '../../assets/images/ajudaki.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';

import './styles.css';

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="container-ajudaki">
          <div className="logo-container">
            <img src={Logo} alt="Ajudaki" />
            <h2>Plataforma de monitorias online.</h2>
          </div>
        </div>  
       
        <div className="buttons-container">
          <p>Seja bem vindo. Escolha um perfil</p>
          
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar"/>
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas"/>
            Dar aulas
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Landing;