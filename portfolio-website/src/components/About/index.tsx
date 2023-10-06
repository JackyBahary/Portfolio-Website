import { FC, useEffect, useState } from "react"
import './index.scss'
import AnimatedLetters from "../AnimatedLetters"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCss3, faGit, faHtml5, faJsSquare, faReact, faNodeJs } from "@fortawesome/free-brands-svg-icons"
import { MutatingDots } from "react-loader-spinner"

const About:FC = () => {
    const [letterClass, setLetterClass] = useState<string>('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
      }, []);

    return (
        <>
        <div className="container page__about">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} idx={15}/>
                </h1>
                <p>
                    Hello, I'm Jacky!
                </p>
                <p>
                    I'm a recent graduate from UTS.
                </p>
                <p>
                    My hobbies are playing sports and games.
                </p>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faNodeJs} color="#5FA04E" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGit} color="#3D2D00" />
                    </div>
                </div>
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

export default About