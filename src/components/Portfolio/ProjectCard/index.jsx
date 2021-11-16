import './style.scss'
const ProjectCard = ({project}) => {
    return(
        <div className="project-card shadow">
            <div className="img-reference d-flex align-items-center justify-content-center">
                <img src={project.img.src} alt={project.img.alt} />
            </div>
            <h3 className="title">{project.title}</h3>
            <p className="description">{project.description}</p>
            <a href={project.link.url} target="_blank" rel="noreferrer"><button className="btn">{project.link.alternativeText}</button></a>
        </div>
    );
}

export default ProjectCard;