import './styles/App.scss';
import Application from './Application'
import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Desktop from './Desktop';
import Contact from './Contact';
import Footer from './Footer';

export default function App() {
  return (
    <>
      <Desktop />
      <Routes>
        <Route path='/' element="" />
        <Route path='application/:id' element={<Application />} />
        <Route path='application/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );

}


