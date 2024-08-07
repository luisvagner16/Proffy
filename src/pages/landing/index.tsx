import React from "react";

import {Link} from 'react-router-dom'

import logoImg from '../../assets/imgs/logo.svg';

import landingImg from '../../assets/imgs/landing.svg'

import studyIcon from '../../assets/imgs/icons/study.svg'
import giveClassesIcon from '../../assets/imgs/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/imgs/icons/purple-heart.svg'
import './styles.css';

function Landing(){
    return (
        <div id="page-landing" className="landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua Plataforma de estudos Online. </h2>
                </div>
                <img src={landingImg} alt="Plataforma"  className="hero-image"/>

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="" /> Estudar
                    </Link>

                    <Link to="give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="" /> Dar Aulas
                    </Link>
                </div>
                <span className="total-connections"> Total de 200 conexões já realizadas 
                    <img src={purpleHeartIcon} alt="" /></span>
            </div>
        </div>


)
}
export default Landing;