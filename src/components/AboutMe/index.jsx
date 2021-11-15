import { Component } from "react";
import devIlustration from '../../assets/svg/ilustrations/dev-ilustration.svg'
import './style.scss'

export default class AboutMe extends Component {

    render(){
        return(
            <section id="about-me" className="d-flex align-items-center flex-column">
                <h2 className="title">Sobre Mim</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gal. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                <img src={devIlustration} alt="Ilustração 'O desenvolvedor'" />
            </section>
        );
    }
}