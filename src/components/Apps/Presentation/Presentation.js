import React, { useState } from 'react'
import { IoMdCloseCircle, IoIosPlay } from 'react-icons/io'
import { Link } from 'react-router-dom'
import './Presentation.scss'
import {motion, useDragControls} from 'framer-motion'

export default function Presentation() {
    function test() {
        alert('Bonjour ya rien pour le moment')
    }
    const controls = useDragControls()
    function startDrag(event) {
        controls.start(event)
      }
      
    return (
        <>
            <motion.div 
                className="appContainer" 
                drag 
                dragControls={controls} 
                dragListener={false} 
                initial={{ opacity: 0, scale: 0}}
                animate={{ opacity: 1, scale: 1 }}
                whileDrag={{scale: 1.003, opacity: 0.98}} 
                dragMomentum={false}
                
            >
                    <div className='appHeader' onPointerDown={startDrag}>
                        <p>Presentation</p>
                        <span>
                            <p className="playButtonAppHeader"><IoIosPlay  onClick={test} /></p>
                            <p className='exitButtonAppHeader'><Link to='/'><IoMdCloseCircle  /></Link></p>
                        </span>
                    </div>
                    <div className='appBody'>
                        
                    </div>
            </motion.div>
        </>
    )
}
