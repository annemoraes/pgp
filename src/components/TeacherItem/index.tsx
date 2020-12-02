import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';
import Profile from '../../components/Profile';


import './styles.css';

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}


function TeacherItem(){
  
  return (
    <article className="teacher-item">
      <header>
      <Profile/>        
      <div>
          <strong>Madson Rodrigues</strong>
          <span>Fisica</span>
        </div>
      </header>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquet tincidunt tellus. Integer aliquet posuere purus, quis dictum sem pharetra et. Sed a orci facilisis, venenatis quam ut, vestibulum purus. Mauris tincidunt ac ex vu vitae nisl vitae pulvinar. </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 20,00</strong>
        </p>
        <a>
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
}

export default TeacherItem;
