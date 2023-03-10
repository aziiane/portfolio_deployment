import React from 'react'
import { IoMdCloseCircle } from 'react-icons/io'
import { Link } from 'react-router-dom'

export default function Galery() {
  return (
    <>
            <div className="appContainer textEditor">
                <div className='appHeader'>
                    <p>Galery</p>
                    <span>
                        <p><Link to='/'><IoMdCloseCircle /></Link></p>
                    </span>
                    <div className='appBody'>
                    
                </div>
                </div>
            </div>
        </>
  )
}
