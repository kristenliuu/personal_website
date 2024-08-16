import './index.scss';
import LogoArt from '../../../assets/images/art-background.png'

const Logo = () => {

    return (
        <div className='logo-container'>
            <img className='solid-logo' src={LogoArt} alt="Art" />

        </div>
    )
}

export default Logo;