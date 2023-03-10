import React from 'react'
import './Icons.scss'
import { Link } from 'react-router-dom'
import Man from '../../Static/icons/man.png'
import Contact from '../../Static/icons/contacts.png'
import Computer from '../../Static/icons/computer.png'
import Galery from '../../Static/icons/galery.png'

export default function Icons() {
    return (
        <>
            <div className='container'>
                <ul>
                    <Link to="/application/presentation">
                        <li className='justify-center'>
                            <img src={Man} alt="IMG" />
                        </li>
                        <li className='text text-center'>Presentation</li>
                    </Link>
                </ul>

                <ul>
                    <Link to="/application/contact">
                        <li className='justify-center'>
                            <img src={Contact} alt="IMG" />
                        </li>
                        <li className='text text-center'>Contact</li>
                    </Link>
                </ul>

                <ul>
                    <Link to="/application/galery">
                        <li className='justify-center'>
                            <img src={Galery} alt="IMG" />
                        </li>
                        <li className='text text-center'>Galery</li>
                    </Link>
                </ul>
            </div>
        </>
    )
}
