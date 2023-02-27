import React, { useState } from 'react'
import { BsInstagram, BsLinkedin, BsArrowBarUp } from "react-icons/bs";
import './styles/footer.scss'

export default function Footer() {
    let [state, setState] = useState(true);
    function toggleState() { setState(!state); console.log(state) }
    return (
        <>
            <footer>
                <button className={state ? "button active" : "button"} onClick={toggleState}><BsArrowBarUp /></button>
                <div className={state ? "footerContainer active" : "footerContainer"}>
                    <div className="footerIcons">
                        <a target="_blank" href='https://instagram.com/azizchebil'><BsInstagram /></a>
                        <a target="_blank" href='https://www.linkedin.com/in/aziz-chebil-a13925178/'><BsLinkedin /></a>
                    </div>
                </div>
            </footer>
        </>
    )
}
