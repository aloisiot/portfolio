import BackEndSkills from "./BackEndSkills";
import './style.scss';
import backEnderIlustration from '../../assets/svg/ilustrations/back-ender-ilustration.svg';
import designerIustration from '../../assets/svg/ilustrations/designer-iustration.svg';
import FrontEndSkills from "./FrontEndSkills";

const Skills = () => {
    return(
        <section id="skills" className="d-flex align-items-center flex-column">
            <h2 className="title">Competências</h2>
            <div id="back-end-skills" className="d-flex flex-wrap align-items-center justify-content-center countainer">
                <BackEndSkills/>
                <img className="ilustration" src={backEnderIlustration} alt="Ilustração 'Back Ender'" />
            </div>
            <div id="front-end-skills" className="d-flex flex-row-reverse flex-wrap align-items-center justify-content-center countainer">
                <FrontEndSkills/>
                <img className="ilustration" src={designerIustration} alt="Ilustração 'Back Ender'" />
            </div>
            <p id="outher-skills">Dentre outras competências estão: Linux (Ubuntu, Debian), virtualização (Doker, Vagrant) infraestrutura e redes.</p>
        </section>
    );
}

export default Skills;