import React, { useState, FormEvent } from 'react';

import PageHeaderForm from '../../components/PageHeaderForm';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Select from '../../components/Select';

import api from '../../services/api';

import './styles.css';

function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      }
    });

    setTeachers(response.data);
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeaderForm title="Estes são os monitores disponíveis.">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select 
            name="subject" 
            label="Matéria"
            value={subject}
            onChange={(e) => { setSubject(e.target.value) }}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Educação física', label: 'Educação física' },
              { value: 'Física', label: 'Física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Química', label: 'Química' },
            ]}
          />
          <Select 
            name="week_day" 
            label="Dia da semana"
            value={week_day}
            onChange={(e) => { setWeekDay(e.target.value) }}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
          />
          
          
          <button type="submit">
            Buscar
          </button>
        </form>
      </PageHeaderForm>

      <main>
        <div className="container-teacher">
          <div className="header-teacher">
            <div className="profile">
            </div>
            <div className="name">
              <p>Anne Moraes</p>
              <p className="sub">Fisica</p>
            </div>
          </div>
          <div className="bio">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquet tincidunt tellus. Integer aliquet posuere purus, quis dictum sem pharetra et. Sed a orci facilisis, venenatis quam ut, vestibulum purus. Mauris tincidunt ac ex vu vitae nisl vitae pulvinar. </p>
          </div>
          <div className="cards">
            <div className="hours">
              <p className="title-card">Dia</p>
              <p className="title-b">Segunda</p>
              <p className="title-card">Horario</p>
              <p className="title-b">8h - 18h</p>
            </div>
            <div className="hours">
              <p className="title-card">Dia</p>
              <p className="title-b">Terça</p>
              <p className="title-card">Horario</p>
              <p className="title-b">8h - 15h</p>
            </div>
            <div className="hours">
              <p className="title-card">Dia</p>
              <p className="title-b">Quarta</p>
              <p className="title-card">Horario</p>
              <p className="title-b">8h - 18h</p>
            </div>
            <div className="hours">
              <p className="title-card">Dia</p>
              <p className="title-b">Quinta</p>
              <p className="title-card">Horario</p>
              <p className="title-b">8h - 18h</p>
            </div>
            <div className="hours">
              <p className="title-card">Dia</p>
              <p className="title-b">Sexta</p>
              <p className="title-card">Horario</p>
              <p className="title-b">8h - 18h</p>
            </div>
        </div>
        <div className="chat">
            <p>Preço/hora <span> R$ 30,00 </span></p>
            <button type="button">Entrar em contato pelo chat</button>
        </div>
        </div>
        
        <div className="container-teacher">
          <div className="header-teacher">
            <div className="profile">
            </div>
            <div className="name">
              <p>Madson Rodrigues</p>
              <p className="sub">História</p>
            </div>
          </div>
          <div className="bio">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquet tincidunt tellus. Integer aliquet posuere purus, quis dictum sem pharetra et. Sed a orci facilisis, venenatis quam ut, vestibulum purus. Mauris tincidunt ac ex vu vitae nisl vitae pulvinar. </p>
          </div>
          <div className="cards">
            <div className="hours">
              <p className="title-card">Dia</p>
              <p className="title-b">Segunda</p>
              <p className="title-card">Horario</p>
              <p className="title-b">9h - 12h</p>
            </div>
            <div className="hours">
              <p className="title-card">Dia</p>
              <p className="title-b">Terça</p>
              <p className="title-card">Horario</p>
              <p className="title-b">9h - 12h</p>
            </div>
            <div className="hours">
              <p className="title-card">Dia</p>
              <p className="title-b">Quarta</p>
              <p className="title-card">Horario</p>
              <p className="title-b">9h - 12h</p>
            </div>
            <div className="hours">
              <p className="title-card">Dia</p>
              <p className="title-b">Quinta</p>
              <p className="title-card">Horario</p>
              <p className="title-b">8h - 11h</p>
            </div>
            <div className="hours">
              <p className="title-card">Dia</p>
              <p className="title-b">Sexta</p>
              <p className="title-card">Horario</p>
              <p className="title-b">15h - 18h</p>
            </div>
        </div>
        <div className="chat">
            <p>Preço/hora <span> R$ 20,00 </span></p>
            <button type="button">Entrar em contato pelo chat</button>
        </div>
        </div>
      </main>
    </div>
  )
}

export default TeacherList;