import { Component } from 'react';
import React from 'react';
import './style.scss';
import { ReactComponent as LinkedinIcon } from '../../assets/svg/icons/linkedin-icon.svg';
import { ReactComponent as GithubIcon } from '../../assets/svg/icons/github-icon.svg';
import { ReactComponent as WhatsAppinIcon } from '../../assets/svg/icons/whats-app-icon.svg';

export default class Footer extends Component {
    render(){
        return(
            <footer id="footer" className="d-flex flex-column align-items-center">
                <div id="contact" className="d-flex flex-column align-items-center">
                    <span>Onde me encontrar:</span>
                    <a href="mailto:aloisiot.c98@gmail.com">aloisiot.c98@gmail.com</a>
                    <div>
                        <a href="https://www.linkedin.com/in/aloisio-carvalho-475a6820b/" target="_blank" rel="noreferrer"><LinkedinIcon/></a>
                        <a href="https://github.com/aloisiot/" target="_blank" rel="noreferrer"><GithubIcon/></a>
                        <a href="https://api.whatsapp.com/send?phone=5533988225571" target="_blank" rel="noreferrer"><WhatsAppinIcon/></a>
                    </div>
                </div>
                <p id="copyright">© Projetado e construído por Aloísio T Carvalho.</p>
            </footer>
        );
    }
}