import React,{useState} from 'react';
import './Footer.scss';

const Footer = () => {

    
  const [email, setEmail] = useState("example@example.com");
  const [mobile, setMobile] = useState("1234567890");
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingMobile, setIsEditingMobile] = useState(false);

  const handleEditEmail = () => {
    setIsEditingEmail(true);
  };

  const handleEditMobile = () => {
    setIsEditingMobile(true);
  };

  const handleSaveEmail = () => {
    setIsEditingEmail(false);
  };

  const handleSaveMobile = () => {
    setIsEditingMobile(false);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  };

  return (
    <div className="FooterConatinerr">
      <h1>Footer </h1>
      <div className='footerDiv'>
        <p>Email:</p>
        {isEditingEmail ? (
          <input type="text" value={email} onChange={handleEmailChange} />
        ) : (
          <p>{email}</p>
        )}
        {isEditingEmail ? (
          <button onClick={handleSaveEmail}>Save</button>
        ) : (
          <button onClick={handleEditEmail}>Edit</button>
        )}
 
        <p>Mobile:</p>
        {isEditingMobile ? (
          <input type="text" value={mobile} onChange={handleMobileChange} />
        ) : (
          <p>{mobile}</p>
        )}
        {isEditingMobile ? (
          <button onClick={handleSaveMobile}>Save</button>
        ) : (
          <button onClick={handleEditMobile}>Edit</button>
        )}
      </div>
    </div>  )
}

export default Footer

