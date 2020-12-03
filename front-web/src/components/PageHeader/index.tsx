import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';
import './style.css'

interface PageHeaderProps {
  title: string
  description?: string
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <header className="container-header">

      <div className="container-header-top-bar">

        <Link to="/">
          <img src={backIcon} className="image-back" alt="Voltar" />
        </Link>
        <img src={logoImg} className="image-logo" alt="Proffy" />

      </div>

      <div className="container-header-content">

        <strong className="page-title" >{props.title}</strong>

        { props.description && <p>{props.description}</p>}
        {props.children}

      </div>
      
    </header>
  )
}

export default PageHeader