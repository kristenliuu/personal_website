import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
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
                                    src={port.cover}
                                    alt={port.description}
                                    className="pictures-image" />
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
                        I am a recent graduate from Northeastern University with a BS in Computer
                        Science with a concentration in Artificial Intelligence and a minor in Musical Theatre.
                        Originally from Palo Alto, I love discovering new hiking trails in Hawaii, running in races 
                        with my friends, and learning to play new instruments like the guitar and oboe. 

                    </p>
                    <p>
                        My passion for musical theatre and singing began when I performed in musicals at my local 
                        theater, and these experiences extended into becoming a musical theatre minor in college. 
                        Performing has taught me the importance of collaboration, adaptability, and connecting with the 
                        audience, which are aspects that translate into my technical work. Similarly, in my technical 
                        projects, I focus a lot on the attention to detail in ensuring the code I write is comprehensive, 
                        efficient, and logically structured. This translates onto the stage, as it is important to perfect 
                        each scene and timing cue. I enjoy combining technical precision with creative innovation. Whether 
                        working on a difficult coding project or performing on the stage, I am enthusiastic about and dedicated 
                        to everything I do. 

                    </p>
                </div>

                <div>{renderPictures(picturesData.pictures)}</div>
            </div>
            <Loader type="ball-pulse" />
        </>
    )
}

export default About