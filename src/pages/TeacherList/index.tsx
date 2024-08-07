import React from "react";
import { Link } from "react-router-dom";

import logoImg from '../../assets/imgs/logo.svg';
import backIcon from '../../assets/imgs/icons/back.svg';
import whatsappIcon from '../../assets/imgs/icons/whatsapp.svg'

import TeacherItem from "../../components/Teacheritem";

import './styles.css';
import PageHeader from '../../components/PageHeader';

function TeacherList(){
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader  tittle={"Estes são os proffys disponíveis"}>
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <input type="text" id="week_day" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time" />
                    </div>
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    );
}

export default TeacherList;
