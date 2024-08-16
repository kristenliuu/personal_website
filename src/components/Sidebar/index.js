import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoKL from '../../assets/images/logo-kl.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoKL} alt="logo" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#B991A3" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#B991A3" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="experience-link" to="/experience">
                <FontAwesomeIcon icon={faSuitcase} color="#B991A3" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
                <FontAwesomeIcon icon={faFolder} color="#B991A3" />
            </NavLink>
        </nav>

        <ul>
            <li>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/kristennliu/">
                    <FontAwesomeIcon icon={faLinkedin} color="#B991A3" />
                </a>
            </li>

            <li>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/kristenliuu">
                    <FontAwesomeIcon icon={faGithub} color="#B991A3" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar