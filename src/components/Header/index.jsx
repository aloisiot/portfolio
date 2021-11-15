import './style.scss'
import logo from '../../assets/svg/icons/logo.svg';

const Header = () =>{

    return(
        <header id="header" className="default-px py-3 d-flex justify-content-between align-items-center">
            <a id="logo" href="#header"><img src={logo} alt="logo" /></a>
            <div className="nav">
                <ul className="nav-list d-flex">
                    <li><a href="#about-me">Sobre mim</a></li>
                    <li><a href="#skills">Competências</a></li>
                    <li><a href="#portfolio">Portfólio</a></li>
                </ul>
            </div>
            <a href="#contact"><button id="contact-button" className="btn">Contato</button></a>
        </header>
    );
}

export default Header;