import React, { useState } from 'react'
import { IoMdCloseCircle, IoIosPlay } from 'react-icons/io'
import { Link } from 'react-router-dom'
import './Presentation.scss'
import {motion, useDragControls, AnimatePresence} from 'framer-motion'
import Man from '../../../Static/icons/man.png'
import Contact from '../../../Static/icons/contacts.png'

export default function Presentation() {
    let [isPlayDisplayed, setPlayDisplay] = useState(true)
    let [isCodeDisplayed, setHiddenCode] = useState(true)
    let [isAppHidden, setHiddenApp] = useState(true)
    function playClickHandler() {
        setPlayDisplay(false)
        setHiddenCode(false)
        alert('Rien à voir ici')
    }
    function runApp(){
        setHiddenApp(false)
        console.log(isAppHidden)
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
                    <motion.div className='appHeader' onPointerDown={startDrag} whileDrag={{ style :{background : '#fff'}}}>
                        <p className='appTitle'>Presentation</p>
                        <span>
                            <p className="playButtonAppHeader"> {isCodeDisplayed ? (<IoIosPlay className='play'  onClick={playClickHandler} />):null}</p>
                            <p className='exitButtonAppHeader'><Link to='/'><IoMdCloseCircle className='exit' /></Link></p>
                        </span>
                    </motion.div>
                    <div className='appBody'>
                    <AnimatePresence>
                        {isCodeDisplayed ? (
                            <motion.div exit={{opacity:0}} transition={{duration: .25}} onAnimationComplete={runApp} animate={{pulse: {scale: [1, 1.1, 1, 1.2, 1, 1]}}}>
                                <div style={{display: 'flex', fontSize: '1.5rem', overflow: 'y'}}>
                                    <div className='codeContainer' style={{borderRight: '3px violet solid', paddingRight: 10, height:'100vh'}}>
                                        <code>1</code>
                                        <code>2</code>
                                        <code>3</code>
                                        <code>4</code>
                                        <code>5</code>
                                        <code>6</code>
                                        <code>7</code>
                                        <code>8</code>
                                        <code>9</code>
                                        <code>10</code>
                                        <code>11</code>
                                        <code>12</code>
                                        <code>13</code>
                                        <code>14</code>
                                        <code>15</code>
                                    </div>
                                    <div className='codeContainer'>
                                        <code>class Developpeur {"{"}</code>
                                        <code style={{marginLeft : '2rem'}}>constructor{"() {"}</code>
                                        <code style={{marginLeft : '4rem'}}>this.firstName = "Aziz"</code>
                                        <code style={{marginLeft : '4rem'}}>this.lastName = "Chebil"</code>
                                        <code style={{marginLeft : '4rem'}}>this.birthDate = "16/07/2000"</code>
                                        <code style={{marginLeft : '4rem'}}>this.skills = {"{"}</code>
                                        <code style={{marginLeft : '6rem'}}>"Php",</code>
                                        <code style={{marginLeft : '6rem'}}>"ES6",</code>
                                        <code style={{marginLeft : '6rem'}}>"reactJs",</code>
                                        <code style={{marginLeft : '6rem'}}>"WordPress"</code>
                                        <code style={{marginLeft : '4rem'}}>{"}"}</code>
                                        <code style={{marginLeft : '2rem'}}>{"}"}</code>
                                        <code>{"}"}</code>
                                        <code>{"/* Press run button to try code */"}</code>
                                        <code>new Developpeur{"()"}</code>
                                    </div>
                                </div>
                            </motion.div>
                             
                        ) : null}   
                        </AnimatePresence>   

                        <AnimatePresence>
                        {!isAppHidden ? (
                            <motion.div initial={{opacity: 0}} animate={{opacity:1}} transition={{duration: 1}}>
                                <img src={Contact} alt="IMG" />
                            </motion.div>
                        ) : null}     
                        </AnimatePresence>              
                    </div>
            </motion.div>
        </>
    )
    
}
