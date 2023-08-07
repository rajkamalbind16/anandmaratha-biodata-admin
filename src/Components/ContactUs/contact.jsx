import React, { useState } from 'react';
import Styles from "./contact.module.css"

const DataTable = () => {
  const [buttonClicked, setButtonClicked] = useState(null);
  const [adminData, setAdminData] = useState([]);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', address: '' });

  const handleUserButtonClick = () => {
    setButtonClicked('user');
  };

  const handleAdminButtonClick = () => {
    setButtonClicked('admin');
    setAdminData([]); // Resetting the adminData array when the Admin Changes button is clicked
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddAdminData = () => {
    setAdminData((prevData) => [...prevData, formData]);
    setFormData({ name: '', phone: '', email: '', address: '' }); // Reset the form fields after adding data
  };

  const headersUser = ['Sr Number', 'Name', 'Email', 'Phone'];
  const headersAdmin = ['Name', 'Phone', 'Email', 'Address'];

  const dummyUserData = [
    { srNumber: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { srNumber: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' },
    // Add more dummy user data objects here...
  ];

  return (
    <div className={Styles.container}>
         <h1>Contact Changes</h1>
         <br/>
         <br/>
      <div style={{textAlign:"centre",marginLeft:"250px"}}>
     
        <button onClick={handleUserButtonClick}>User Changes</button>
        <button onClick={handleAdminButtonClick}>Admin Changes</button>
      </div>
      <br/>
      <br/>
      {buttonClicked === 'user' ? (
        <table style={{ margin: "auto",width:"70%",justifyContent:"space-around" }}>
          <thead style={{width:"100%",justifyContent:"space-between"}}>
            <tr >
              {headersUser.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead >
          <tbody>
            {dummyUserData.map((user) => (
              <tr key={user.srNumber}>
                <td>{user.srNumber}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>
          <div  className={Styles.form} >
            <div>
            <label>Name:</label>
            <br/>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
          </div>
          <br/>
          <div>
            <label>Phone:</label>
            <br/>
            <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} />
          </div>
          <br/>
          <div>
            <label>Email:</label>
            <br/>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
          </div>
          <br/>
          <div>
            <label>Address:</label>
            <br/>
            <input type="text" name="address" value={formData.address} onChange={handleInputChange} />
          </div>
          <br/>
          <button style={{margin:"auto"}} onClick={handleAddAdminData}>Add Data</button>
          </div>
          <br/>
          <br/>
          <table style={{ margin: "auto",width:"70%",justifyContent:"space-around" }}>
            <thead>
              <tr>
                {headersAdmin.map((header) => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {adminData.map((admin, index) => (
                <tr key={index}>
                  <td>{admin.name}</td>
                  <td>{admin.phone}</td>
                  <td>{admin.email}</td>
                  <td>{admin.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DataTable;
