import { useState } from 'react';
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import Allroutes from './Components/Allroutes';
import Sidebar from './Components/SideNavbar/Sidebar';


const  App =()=> {

  return (
 <>
  <BrowserRouter>

<div className='mainProDiv'>
  <Sidebar/>
  <Allroutes/>

</div>




  
  </BrowserRouter>

 

 </>
  )
}

export default App
