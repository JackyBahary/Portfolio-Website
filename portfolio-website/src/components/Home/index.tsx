import { FC, useEffect, useState } from "react";
import './index.scss';
import LogoTitle  from '../../assets/images/logo-j.png';
import { Link } from 'react-router-dom';
import AnimatedLetters from "../AnimatedLetters";
import Logo from './Logo';
import { MutatingDots } from "react-loader-spinner";


const Home:FC = () => { 
    const [letterClass, setLetterClass] = useState<string>('text-animate')
    const nameArray = ['a', 'c', 'k', 'y']
    const jobArray = ['d', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
      }, []);

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img src={LogoTitle} alt="developer" />
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={19} />
                </h1>
                <h2>
                    <br />
                    Junior Software Developer / Junior Web Developer
                    <br />
                    <br />
                </h2>
                <Link to="/contact" className="button">CONTACT ME</Link>
            </div>
            <Logo></Logo>
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

export default Home