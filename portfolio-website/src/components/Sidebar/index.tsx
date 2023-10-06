import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoS  from '../../assets/images/logo-j.png'
import LogoSubtitle from '../../assets/images/logo_j_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FC } from 'react';

const Sidebar:FC = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/Portfolio-Website'>
            <img src={LogoS} alt="logo"/>
            <img className="logo__sub" src={LogoSubtitle} alt="jacky"/>
        </Link>
        <nav>
            <NavLink to="/Portfolio-Website">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink className="about-link" to="/Portfolio-Website/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink className="contact-link" to="/Portfolio-Website/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/jackybahary/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/JackyBahary'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar