import { Component } from "react";
import './style.scss';
import perfil from '../../assets/img/perfil.jpg';
import wave1 from '../../assets/svg/wave1.svg';
import wave2 from '../../assets/svg/wave2.svg';
import wave3 from '../../assets/svg/wave3.svg';
import wave4 from '../../assets/svg/wave4.svg';

export default class banner extends Component {

    render(){

        return(<>
            <section id="banner" className="d-flex justify-content-center align-items-center">
                <div id="banner-content" className="d-flex">
                    <img id="perfil" src={perfil} alt="perfil" />
                    <div className="countainer">
                        <h1><span>Olá, me chamo Aloísio!</span><br/>Desenvolvedor<br/>Web Full Stack</h1>
                        <a href="#portfolio"><button id="portfolio-button" className="btn">Veja meu portfólio</button></a>
                    </div>
                </div>
                <div id="waves">
                    <div className="wave w-1"></div>
                   <img src={wave1} alt="pseudo onda" className="wave w1" />
                   <img src={wave2} alt="pseudo onda" className="wave w2" />
                   <img src={wave3} alt="pseudo onda" className="wave w3" />
                   <img src={wave4} alt="pseudo onda" className="wave w4" />
                </div>
            </section>
        </>);       
    }

}