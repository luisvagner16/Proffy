import React from "react";
import whatsappIcon from '../../assets/imgs/icons/whatsapp.svg'

import './styles.css'
function Teacheritem(){
    return(
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars.githubusercontent.com/u/121523796?v=4" alt="Luís Gonçalves" />
                        <div>
                            <strong>Luís Gonçalves</strong>
                            <span>Educação Financeira</span>
                        </div>
                    </header>
                    <p>Entusiasta das melhores tecnologias de química avançada
                        <br /> <br />
                        Apaixonado por expandir coisas em laboratórios e por mudar a vida das pessoas atraves de experiências. Mais de 200.00 pessoas já passaram por uma das minhas explosões.
                    </p>

                    <footer>
                        <p>Preço/hora <strong>R$ 80,00</strong></p>

                        <button type="button">
                            <img src={whatsappIcon} alt="whatsApp" />Entar em contato
                        </button>
                    </footer>
                </article>
    )
}

export default Teacheritem;