import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAngular, faGithub, faJava, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import picturesData from '../../data/pictures.json'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => clearTimeout(timer)
        }, []) 

    const renderPictures = (pictures) => {
        return (
            <div className="images-container2">
                {
                    pictures.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img 
                                src= {port.cover}
                                alt= {port.description}
                                className="pictures-image"/>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['a', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    I am a fourth year student at Northeastern University, pursuing a BS in Computer 
                    Science with a concentration in Artificial Intelligence and a minor in Musical Theatre.
                </p>
                <p>
                    I am from Palo Alto, California and some of my hobbies include running, singing, learning new instruments, traveling, and baking.
                    I also love exploring new hiking trails while I travel. I enjoy running for fun, but I also like running in races! I also like
                    to try out fun and new recipes and bake tasty treats for my friends and family. I used to act in plays and musicals at my local theatre, which
                    is where I discovered a love for music and singing.
                </p>
                <p>
                    I have a strong technical background, excellent communication skills, and creative problem-solving skills. 
                    I am highly motivated to take on new challenges and make a meaningful contribution in the tech field as I 
                    continue to expand my skillset.
                </p>
            </div>

            {/* <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faJava} color="#5382A1"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faPython} color="#FFDE57"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faReact} color="#00D8FF"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare} color="#DDA636"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faAngular} color="#c3002f"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGithub} color="#717171"/>
                    </div>
                </div>
            </div> */}

            <div>{renderPictures(picturesData.pictures)}</div>
        </div>
        <Loader type="ball-pulse" />
        </> 
    )
}

export default About