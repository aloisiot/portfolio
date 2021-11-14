import { Component } from "react";
import './style.scss'
import logo from '../../assets/svg/logo.svg';

export default class Header extends Component{

    render(){
        return(<>
            <header id="header" className="default-px py-2 d-flex justify-content-between align-items-center">
                <ul id="dropdown-menu" class="dropdown-menu dropdown-menu-macos mx-0 border-0 shadow">
                    <li><a class="dropdown-item" href="#about-me">Sobre mim</a></li>
                    <li><a class="dropdown-item" href="#skills">Competências</a></li>
                    <li><a class="dropdown-item" href="#portfolio">Portfólioe</a></li>
                    <li><hr class="dropdown-divider"/></li>
                    <li><a class="dropdown-item" href="#portfolio">Contato</a></li>
                </ul>
                <a href="#header"><img src={logo} alt="logo" /></a>
                <div className="nav">
                    <ul className="nav-list d-flex">
                        <li><a href="#about-me">Sobre mim</a></li>
                        <li><a href="#skills">Competências</a></li>
                        <li><a href="#portfolio">Portfólio</a></li>
                    </ul>
                </div>
                <a href="#contact"><button id="contact-button" className="btn">Contato</button></a>
            </header>
        </>);
    }

}