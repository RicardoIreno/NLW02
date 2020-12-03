import React from 'react'
import { Link } from 'react-router-dom'
// import api from '../../services/api';

import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './style.css'

function Landing() {

  return (
    <div id="page-landing">
      <div className="container-logo">
        <img src={logoImg} alt="Proffy" />
        <h2>Plataforma de fucking estudos</h2>
      </div>

      <img
        src={landingImg}
        alt="Plataforma de estudos"
        className="hero-image"
      />

      <div className="container-button">
        <Link to="./study" className="button-study">
          <img src={studyIcon} alt="Estudar" />
             Estudar
         </Link>

        <Link to="./give-classes" className="button-give-classes">
          <img src={giveClassesIcon} alt="Dar aulas" />
             Dar aulas
         </Link>
      </div>

      <span className="total-connections">
       Total de x conexões já realizadas
         <img src={purpleHeartIcon} alt="Coração" />
      </span>
    </div>

  )
}

export default Landing