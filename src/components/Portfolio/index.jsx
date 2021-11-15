import { Component } from 'react';
import './style.scss';
import projects from '../../assets/data/projects';
import ProjectCard from './ProjectCard';

export default class Portfolio extends Component {
    render(){
        return(
            <section id="portfolio" className="d-flex flex-column align-items-center default-px">
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
}