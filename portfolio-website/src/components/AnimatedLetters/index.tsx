import { FC } from 'react';
import './index.scss';

const AnimatedLetters:FC<{ letterClass: string, strArray: string[], idx: number }> = ({ letterClass, strArray, idx }) => {
    return (
        <span>
            {
                strArray.map((char, i) => (
                    <span key={char + i} className={`${letterClass} _${i + idx}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    )
};

export default AnimatedLetters