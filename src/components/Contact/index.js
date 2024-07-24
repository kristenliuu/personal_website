// import Loader from 'react-loaders'
// import './index.scss'
// import AnimatedLetters from '../AnimatedLetters'
// import { useEffect, useRef, useState } from 'react'
// import emailjs from '@emailjs/browser';


// const Contact = () => {
//     const [letterClass, setLetterClass] = useState('text-animate')
//     const form = useRef

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setLetterClass('text-animate-hover')
//         }, 3000)
//         return () => clearTimeout(timer)
//         }, [])
        
//     const sendEmail = (e) => {
//         e.preventDefault()

//         emailjs
//             .sendForm(
//                 'gmail',
//                 'template_su6j7g9',
//                 form.current,
//                 'A6S1fRae_hjbsG6KR'
//             )
//             .then(
//                 () => {
//                     alert('Message successfully sent!')
//                     window.location.reload(false)
//                 },
//                 () => {
//                     alert('Message failed to send, please try again.')
//                 }
//             ) 

//     }

//     return (
//     <>
//         <div className='container contact-page'>
//             <div className='text-zone'>
//                 <h1>
//                     <AnimatedLetters 
//                     letterClass={letterClass}
//                     strArray= {['c', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
//                     idx={15}
//                     />
//                 </h1>
//                 <p>
//                     If you want to contact me, please feel free to reach out about any quesions
//                     to learn more! Use the form below and fill out all the entries.
//                 </p>
//                 <div className="contact-form">
//                 <form ref={form} onSubmit={sendEmail}>
//                     <ul>
//                         <li className="half">
//                             <input type="text" name="name" placeholder="Name" required />
//                         </li>
//                         <li className="half">
//                             <input type="email" name="name" placeholder="Email" required />
//                         </li>
//                         <li>
//                             <input placeholder="Subject" type="text" name="Subject" required/>
//                         </li>
//                         <li>
//                             <textarea placeholder="Message" required>
//                             </textarea>
//                         </li>
//                         <li>
//                             <input type="submit" className='flat-button' value="SEND" />
//                         </li>
//                     </ul>
//                 </form>
//             </div>
//         </div>
//         </div>
//         <Loader type="ball-pulse" />

//     </>
//     )
// }

// export default Contact