import devIlustration from '../../assets/svg/ilustrations/dev-ilustration.svg'
import './style.scss'

const AboutMe = () => {

    return(
        <section id="about-me" className="d-flex align-items-center flex-column">
            <h2 className="title">Sobre Mim</h2>
            <p>Estudante de Análise e Desenvolvimento de Sistemas pela Doctum e seguindo a trilha Certified Tech Developer pela Digital House. Estudo programação não apenas em busca de uma carreira promissora, mas por que sou apaixonado por essa área e pelas suas infinitas possibilidades. Adoro trabalhar em equipe e aprender coisas novas! Nas horas vagas sou praticante de musculação e patinação.</p>
            <img className="ilustration" src={devIlustration} alt="Ilustração 'O desenvolvedor'" />
        </section>
    );
}

export default AboutMe;