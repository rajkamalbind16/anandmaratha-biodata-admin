import React, { useState } from 'react';
import './login.css';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Form = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {

    event.preventDefault();
  
    // Check if email and password match the desired values
    if (email === 'admin@aghori.com' && password === 'Aghori') {
      const data = {
        email : email,
        password : password
      }
      if (data) {
        localStorage.setItem('isLogin', true);
      }

     
      window.alert('Successful,Welcome to Graveyard');
      navigate('/home')
      window.location.reload();
      // You can add your login logic here, such as navigating to a new page or updating state to show the authenticated content.
    } else {
      
      window.alert('Invalid email or password. Please try again.');
    }
  
  

    

    console.log(localStorage);
    

    
  };

  return (
    <>
      <div className='bigee'>
        <p>Welcome to Admin Panel</p>
     
      <div className="maindivimg">
        <div className="authForm">
          <h1 id='headingLogin'>{isLogin ? 'Login' : 'Signup'}</h1>
          <form onSubmit={handleSubmit} style={{ marginLeft: '35rem' }}>
            <input
              className='emaill'
              type="email"
              placeholder="Email"
              value={email}
              id='email'
              onChange={handleEmailChange}
            />
            <br />
            <input
              className='emaill'
              type="password"
              placeholder="Password"
              value={password}
              id='password'
              onChange={handlePasswordChange}
            />
            <br />
            <br />
            <button type="submit" id='LoginBtn'>
              {isLogin ? 'Login' : 'Signup'}
            </button>
            <br />
          </form>
        </div>
      </div>
      <div className='StoreIconss'>
        {/* <img src={aStore} height={'60px'} width={'150px'} />
        <img src={gStore} height={'60px'} width={'150px'} /> */}
        {/* Provide the source URL for the image */}
        {/* <div style={{ position: 'relative', top: -440, left: 350 }}>
          <img src={'path-to-your-image'} height={'250px'} width={'300px'} />
        </div> */}
      </div>
      </div>
    </>
  );
};

export default Form;
