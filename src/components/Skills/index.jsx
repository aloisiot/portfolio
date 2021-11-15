import { Component } from "react";
import BackEndSkills from "./BackEndSkills";
import './style.scss';
import backEnderIlustration from '../../assets/svg/ilustrations/back-ender-ilustration.svg';
import designerIustration from '../../assets/svg/ilustrations/designer-iustration.svg';
import FrontEndSkills from "./FrontEndSkills";

export default class Skills extends Component {
    render() {
        return(
            <section id="skills" className="d-flex align-items-center flex-column">
                <h2 className="title">Competências</h2>
                <div id="back-end-skills" className="d-flex flex-wrap align-items-center justify-content-center countainer">
                    <BackEndSkills/>
                    <img src={backEnderIlustration} alt="Ilustração 'Back Ender'" />
                </div>
                <div id="front-end-skills" className="d-flex flex-wrap align-items-center justify-content-center countainer">
                    <img src={designerIustration} alt="Ilustração 'Back Ender'" />
                    <FrontEndSkills/>
                </div>
                <p id="outher-skills">Dentre outras competências estão: Linux (Ubuntu, Debian), virtualização (Doker, Vagrant) infraestrutura e redes.</p>
            </section>
        );
    }
}