import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faGithub, faJava, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const Experience = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <div className='container experience-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['e', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        At Northeastern University, I have completed the following relevant courses:
                        Machine Learning and Data Mining 1 and 2, Software Engineering, Object-Oriented Design, Algorithms and Data, Theory of Computation,
                        Computer Systems, Mathematics of Data Models, Database Design.
                    </p>
                    <p>
                        I completed a co-op/internship as a Data Engineering Co-op at Johnson & Johnson MedTech. In this position, I developed comprehensive test scripts to
                        validate the functionality and performance of UI elements and managed test cases, requirements and other documentation. I also
                        enhanced test quality through the implementation of end-to-end testing in Cypress to automate test cases, and developed front-end
                        web-based components using Angular, enhancing the user experience and interface design. Additionally, I collaborated with cross-functional
                        teams to identify, report, and resolve software defects, enhancing the overall product quality.
                    </p>
                    <p>
                        I was a Teaching Assistant for the undergraduate courses Mathematics of Data Models, Machine Learning and Data Mining 1. I taught and clarified concepts for 400+ students in statistics, linear
                        algebra, and other concepts pertaining to machine learning. I also evaluated and provided detailed feedback for students’ assignments and assessments weekly, and held
                        weekly office hour sessions for one-on-one tutoring to aid students in course material.
                    </p>
                    <p>
                        From my coursework and previous experiences, I am proficient in the following languages: Java, Python, JavaScript, TypeScript, Assembly, SQL, C, R, HTML, CSS, Racket.
                        I am also proficient in the following tools/technologies: Angular, Git, React, Latex, Cypress, MongoDB, Jupyter Notebook, Eclipse, IntelliJ, VSCode, DrRacket.
                    </p>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faJava} color="#5382A1" />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faPython} color="#FFDE57" />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faReact} color="#00D8FF" />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faJsSquare} color="#DDA636" />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faAngular} color="#c3002f" />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGithub} color="#717171" />
                        </div>
                    </div>
                </div>

            </div>
            <Loader type="ball-pulse" />
        </>
    )
}

export default Experience