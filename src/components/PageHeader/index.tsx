import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

import logoImg from '../../assets/imgs/logo.svg';
import backIcon from '../../assets/imgs/icons/back.svg';
import './styles.css';

interface PageHeaderProps {
    [x: string]: ReactNode;
    tittle: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return(
        <header className="page-header">
                <div className="top-bar-container">
                    <Link to="/">
                    <img src={backIcon} alt="Voltar" />
                    </Link>
                    <img src={logoImg} alt="Proffy" />
                </div>

                <div className="header-content">
                    <strong>{props.tittle}</strong>
                </div>

                {props.children}
            </header>
    );
}

export default PageHeader;