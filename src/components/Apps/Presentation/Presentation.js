import React from 'react'
import { IoMdCloseCircle } from 'react-icons/io'
import { Link } from 'react-router-dom'
import './Presentation.scss'

export default function Presentation() {
    return (
        <>
            <div className="appContainer textEditor">
                <div className='appHeader'>
                    <p>Presentation</p>
                    <span>
                        <p><Link to='/'><IoMdCloseCircle /></Link></p>
                    </span>
                </div>
                <div className='appBody'>
                    <textArea>LGMSGKSMDLGKDMLFKDSMFKDMSLFKSDMFLK</textArea>
                </div>
            </div>
        </>
    )
}
