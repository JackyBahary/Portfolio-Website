import { FC, useEffect, useRef, useState } from 'react'
import './index.scss'
import { MutatingDots } from 'react-loader-spinner'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact:FC = () => {
    const [letterClass, setLetterClass] = useState<string>('text-animate')
    const refForm = useRef<HTMLFormElement>(null)

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
      }, []);

    const sendEmail = (e: { preventDefault: () => void }) => {
        e.preventDefault()

        if (refForm.current) {
            emailjs
            .sendForm('service_1andjtv', 'template_h65uszf', refForm.current, 'R5T4QPN_5Yv-P1dxK')
            .then (
                () => {
                    alert('Message successfully sent!')
                    window.location.reload()
                },
                () => {
                    alert('Failed to send message, please try again!')
                }
            )
        }
    }

    return (
        <>
            <div className='container page__contact'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm' , 'e']} idx={15} letterClass={letterClass}/>
                    </h1>
                    <p>
                        Feel free to contact me!
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half '>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input type='text' name='subject' placeholder='Subject' required />    
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='button' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Jacky Richie Bahary
                    <br />
                    82 Maroubra Road, Maroubra 2035
                    <br />
                    NSW, Australia 
                    <br />
                    <span>jackyrichiebahary@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[-33.94055586535234, 151.23390015259693]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[-33.94055586535234, 151.23390015259693]}>
                            <Popup>
                                Jacky lives here :)
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <MutatingDots 
            color="#4F709C"
            secondaryColor="#E5D283"
            radius='12.5'
            wrapperClass="loader"
            />
        </>
    )
}

export default Contact