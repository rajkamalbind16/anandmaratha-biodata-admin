import React from 'react';
import './Sidebar.css';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Clear local storage
    localStorage.clear();
    // Navigate to the "/" route

    navigate('/');
    window.location.reload();
  };


  return (
    <>
    <div className='sideBarContainerr'>
        <p id='dashboarddd'>Dashboard</p>
        <Link to='/home' style={{textDecoration:'none',color:'white'}}><p>Home</p>  </Link>
        <Link to='/footer' style={{textDecoration:'none',color:'white'}}><p> Footer</p>  </Link>
        <Link to='/rule' style={{textDecoration:'none',color:'white'}}><p> Rule</p>  </Link>
        <Link to='/Contact' style={{textDecoration:'none',color:'white'}}><p> Contact Us</p>  </Link>
        <Link to='/unmarried' style={{textDecoration:'none',color:'white'}}><p>Unmarried</p>  </Link>
        <Link to='/enroll' style={{textDecoration:'none',color:'white'}}><p>Enroll</p>  </Link>
        <Link to='/renew' style={{textDecoration:'none',color:'white'}}><p>Renew</p>  </Link>


               {!localStorage.getItem('isLogin')? <Link to='/' style={{textDecoration:'none',color:'white'}}><p>Login</p>  </Link> : <Link to='/' style={{textDecoration:'none',color:'white'}} onClick={handleLogout}><p>Logout</p>  </Link> }
    </div>
        
    </>
  )
}

export default Sidebar