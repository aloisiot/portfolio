import todoRefIlustration from '../svg/ilustrations/todo-ref-ilustration.svg';
import clinicaRefIlustration from '../svg/ilustrations/clinica-ref-ilustration.svg';

const projects = [
    {
        img: {
            src: todoRefIlustration,
            alt: "ilustração 'lista de tarefas'"
        },
        title: "ToDo",
        description: "Desenvolvida  com colegas de curso para a disciplina Front End II na Digital House, consiste em uma aplicação para gerenciar suas tarefas e afazeres.",
        link: {
            url:"https://gsantosp.github.io/ToDo/",
            alternativeText: "Confira o resultado"
        }
    },
    {
        img: {
            src: clinicaRefIlustration,
            alt: "ilustração 'ferramentas'"
        },
        title: "Clínica Odontológica",
        description: "Desenvolvida   para a disciplina Back End na Digital House, consiste em uma API para inserção, consulta e atualização de dados (CRUD) de uma clínica odontológica fictícia.",
        link: {
            url:"https://github.com/aloisiot/Consultorio-Odontologico",
            alternativeText: "Veja o codigo fonte"
        }
    }
];

export default projects;