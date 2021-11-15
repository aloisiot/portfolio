import './style.scss';
import projects from '../../assets/data/projects';
import ProjectCard from './ProjectCard';

const Portfolio = () => {
    return(
        <section id="portfolio" className="d-flex flex-column align-items-center justify-content-center default-px">
            <h2 className="title">Portfólio</h2>
            <div className="countainer">
                <ul className="d-flex flex-wrap justify-content-around">
                    {projects.map((p, i) => {
                        return <li key={i}><ProjectCard project={p} /></li>
                    })}
                </ul>
            </div>
        </section>
    );
}

export default Portfolio;