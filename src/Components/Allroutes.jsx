import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './Home page/Home';
import Login from './login signup/Login';
import Footer from './Footer page/Footer';
import Rule from './rule/Rule';
import ContactUs from './ContactUs/contact';
import Enroll from './Enroll page/Enroll';
import Renew from './renew/Renew';
import Unmarried from './profile/DivorseGrooms';

const Allroutes = () => {
  return (
    <>
    <Routes>

    {localStorage.getItem("isLogin") &&  <Route path='/' element={<Home/>} />}
    <Route path='/home' element={<Home/>} />
       {!localStorage.getItem("isLogin") && <Route path='/' element={<Login/>} />}

       <Route path='/footer' element={<Footer/>} />
       <Route path='/rule' element={<Rule/>} />
        <Route path='/Contact' element={<ContactUs/>} />
        <Route path='/enroll' element={<Enroll/>} />
        <Route path='/renew' element={<Renew/>} />
        <Route path='/unmarried' element={<Unmarried/>} />




    </Routes>
    
    
    
    
    </>
  )
}

export default Allroutes