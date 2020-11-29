import React from 'react';
import { Link } from 'react-router-dom';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

interface PageHeaderFormProps {
  title: string;
  description?: string;
}

const PageHeaderForm: React.FC<PageHeaderFormProps> = (props) => {
  return (
    <header className="page-header">
      <div className="top-bar-container"> 
        <Link to="/landing">
          <img src={backIcon} alt="Voltar" />
        </Link>
      </div>

      <div className="header-content">
        <strong>{props.title}</strong>
        { props.description && <p>{props.description}</p> }

        {props.children}
      </div>
    </header> 
  );
}

export default PageHeaderForm;