// import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-K-2.png';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['r', 'i', 's', 't', 'e', 'n']

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
          }, 3000)
          return () => clearTimeout(timer)
        }, []) 

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>h</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>i</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle}
                     alt="Developer Name"
                />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                {/* <br />
                web developer */}
                </h1>
                <h2>fourth year computer science student at northeastern university</h2>
                <a className='flat-button' href="mailto:kristenyliu@gmail.com">contact me!</a>
            </div>
            <Logo />
        </div>
        <Loader type="ball-pulse" />

        </>
    );
}

export default Home