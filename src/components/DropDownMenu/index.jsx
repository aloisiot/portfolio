import React, {  useState } from 'react';
import {ReactComponent as MenuButton} from '../../assets/svg/icons/menu-icon.svg'
import {ReactComponent as CloseBusson} from '../../assets/svg/icons/close-button.svg'
import './style.scss';

const DropDownMenu = () => {
    const [isVisible, setIsVisible] = useState(false);

    return(
    <>
        <button onClick={()=> setIsVisible(!isVisible)} id="toggle-drop-down-menu" className="btn"> { isVisible ? <CloseBusson/> : <MenuButton/> } </button>
        <ul className={`dropdown-menu dropdown-menu-macos mx-0 border-0 shadow ${ isVisible ? " is-visible ": ""}`}>
            <li><a className="dropdown-item" href="#about-me">Sobre mim</a></li>
            <li><a className="dropdown-item" href="#skills">Competências</a></li>
            <li><a className="dropdown-item" href="#portfolio">Portfólioe</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#contact">Contato</a></li>
        </ul>
    </>
    );
}

export default DropDownMenu;