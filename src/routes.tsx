import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import Recover from './pages/Recover';
import Register from './pages/Register';
import CRegister from './pages/CRegister';
import CRecover from './pages/CRecover';
import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/recover" component={Recover} />
      <Route path="/register" component={Register} />
      <Route path="/concluded" component={CRegister} />
      <Route path="/concluded-password" component={CRecover}/>
      <Route path="/landing" component={Landing} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
    </BrowserRouter>
  );
}

export default Routes;