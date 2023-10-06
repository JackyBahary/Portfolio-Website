import { FC, useRef } from 'react';
import './index.scss';
import LogoJ from '../../../assets/images/logo-j.png';

const Logo:FC = () => {

    const bgRef = useRef<HTMLDivElement>(null);
    const outlineLogoRef = useRef<SVGPathElement>(null);
    const solidLogoRef = useRef<HTMLImageElement>(null);
    
    return (
        <div className='logo-container' ref={bgRef}>
            <img ref={solidLogoRef} className='solid-logo' src={LogoJ} alt='J'/>
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="361.000000pt" height="489.000000pt" viewBox="0 0 361.000000 489.000000"
            preserveAspectRatio="xMidYMid meet">
                <g className='svg-container' transform="translate(0.000000,489.000000) scale(0.100000,-0.100000)"
                fill="#000000" stroke="none">
                    <path 
                    ref={outlineLogoRef}
                    d="M2218 3108 c-3 -1980 4 -1797 -80 -1968 -73 -150 -225 -275 -360
                    -295 -32 -5 -61 -1 -108 15 -217 72 -330 250 -347 543 l-6 107 -653 0 -654 0
                    0 -27 c0 -16 5 -82 10 -148 30 -359 132 -618 337 -847 224 -251 534 -398 957
                    -454 153 -20 741 -19 884 1 253 36 492 124 687 253 296 196 494 479 586 835
                    54 210 51 116 56 2000 l4 1747 -655 0 -656 0 -2 -1762z m302 35 c0 -1785 0
                    -1765 -41 -1908 -26 -92 -105 -214 -179 -277 -101 -87 -223 -128 -376 -128
                    l-99 0 75 37 c54 26 95 56 146 107 120 120 177 270 194 506 5 69 9 855 10
                    1748 l0 1622 135 0 135 0 0 -1707z m687 -35 c-4 -1860 -2 -1786 -52 -1978 -73
                    -288 -229 -543 -443 -722 -104 -89 -158 -124 -288 -191 -179 -91 -365 -145
                    -579 -168 -99 -11 -124 -10 -260 10 -238 35 -380 78 -560 169 -336 169 -571
                    481 -655 867 -18 82 -40 264 -40 332 l0 63 335 0 335 0 0 -52 c0 -115 42 -292
                    89 -373 72 -125 182 -205 333 -239 80 -18 569 -22 652 -5 189 40 357 201 422
                    406 50 160 47 62 51 1906 l4 1717 330 0 330 0 -4 -1742z m293 12 c0 -1517 -2
                    -1742 -16 -1828 -47 -298 -144 -517 -327 -739 -175 -213 -471 -388 -782 -464
                    -106 -26 -275 -49 -344 -48 l-56 1 85 22 c142 38 250 76 355 126 380 183 651
                    515 756 924 56 218 53 108 56 1994 l4 1742 134 0 135 0 0 -1730z m-3181 -1787
                    c21 -264 91 -499 199 -668 207 -320 502 -513 925 -605 l92 -20 -100 5 c-172 7
                    -416 58 -561 115 -218 87 -377 196 -514 355 -153 176 -239 353 -289 590 -16
                    80 -41 304 -41 371 0 11 29 14 138 14 l139 0 12 -157z m984 65 c18 -286 134
                    -475 336 -550 l46 -16 -95 -1 c-328 -2 -508 158 -559 496 -6 39 -11 92 -11
                    117 l0 46 139 0 138 0 6 -92z"/>
                </g>
            </svg>
        </div>
    )
}

export default Logo