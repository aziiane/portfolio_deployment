import './styles/App.scss';
import { Routes as AppRoutes, Route } from 'react-router-dom'
import React from 'react'
import Icons from './components/Icons/Icons';
import Contact from './components/Apps/Contact/Contact';
import Presentation from './components/Apps/Presentation/Presentation';
import Footer from './components/Footer/Footer'
import Galery from './components/Apps/Galery/Galery';

export default function App() {
  return (
    <>
      <Icons />

      <AppRoutes>
        <Route path='/' element="" />
        <Route path='application/contact' element={<Contact />} />
        <Route path='application/presentation' element={<Presentation />} />
        <Route path='application/galery' element={<Galery />} />
      </AppRoutes>
      
      <Footer />
    </>
  );

}


