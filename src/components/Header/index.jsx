import './style.scss'
import logo from '../../assets/svg/icons/logo.svg';

const Header = () =>{

    return(
        <header id="header">
            <div className="default-px py-2 d-flex justify-content-between align-items-center content">
                <ul id="dropdown-menu" className="dropdown-menu dropdown-menu-macos mx-0 border-0 shadow">
                    <li><a className="dropdown-item" href="#about-me">Sobre mim</a></li>
                    <li><a className="dropdown-item" href="#skills">Competências</a></li>
                    <li><a className="dropdown-item" href="#portfolio">Portfólioe</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#contact">Contato</a></li>
                </ul>
                <a id="logo" href="#header"><img src={logo} alt="logo" /></a>
                <div className="nav">
                    <ul className="nav-list d-flex">
                        <li><a href="#about-me">Sobre mim</a></li>
                        <li><a href="#skills">Competências</a></li>
                        <li><a href="#portfolio">Portfólio</a></li>
                    </ul>
                </div>
                <a href="#contact"><button id="contact-button" className="btn">Contato</button></a>
            </div>
        </header>
    );
}

export default Header;