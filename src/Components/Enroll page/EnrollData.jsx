import React, { useState } from 'react';
import './EnrollData.scss';

const initialData = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  email: 'john.doe@example.com',
  address: '123 Main Street',
  SubCast:'hfhgf',
  Height:'40kg',
Weight:'345345kg',
Blood_Group :"A+",
Complexion:'Dark',
Disablities:'no',
Diet:'vegan',
Spectacles:'yes',
Rashi:'Gemini',
Nakshatra:'Ashwini',
Charan:'1',
Nadi:'Adhya',
Gan:'Yaash',
Mangal:'Nirdosh',
EducationalDetail:'mca',
Occupation:'pvt',
Working_City:'Puna',
Income:'363636',
Parents_Fullname :'aghorii',
Parents_Occupation:'teacher',
};

const EnrollData = ({ show, onClose, data }) => {
  const [formData, setFormData] = useState(data);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditToggle = () => {
    setIsEditMode((prevEditMode) => !prevEditMode);
  };

  const handleSave = () => {
    setIsEditMode(false);
    // You can perform any further actions with the saved data here
  };

  const handleReset = () => {
    setFormData(data);
    setIsEditMode(false);
  };

  return (
    <div className={`modal ${show ? 'visible' : ''}`}>
      <div className="modalContent">
        <h1>Bio Data</h1>
        <button className="close-btn" onClick={onClose}>
        Close
      </button>
        <div className='modelGrid'>
        <div>
          <label>First Name: </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            disabled={!isEditMode}
          />
        </div>
        <div>
          <label>Last Name: </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            disabled={!isEditMode}
          />
        </div>
        <div>
          <label>Age: </label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            disabled={!isEditMode}
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            disabled={!isEditMode}
          />
        </div>
        <div>
          <label>Address: </label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            disabled={!isEditMode}
          />
        </div>
        <div>
          <label>SubCast : </label>
          <input
            type="text"
            name="SubCast"
            value={formData.SubCast}
            onChange={handleInputChange}
            disabled={!isEditMode}
          />
        </div>
        <div>
          <label> Height: </label>
          <input
            type="number"
            name="Height"
            value={formData.Height}
            onChange={handleInputChange}
            disabled={!isEditMode}
          />
        </div>
        <div>
          <label>Weight: </label>
          <input
            type="number"
            name="Weight"
            value={formData.Weight}
            onChange={handleInputChange}
            disabled={!isEditMode}
          />
        </div>
        <div>
          <label>Blood Group: </label>
          <input
            type="text"
            name="Blood_Group"
            value={formData.Blood_Group}
            onChange={handleInputChange}
            disabled={!isEditMode}
          />
        </div>
        <div>
          <label>Complexion: </label>
          <input type='text'
            name="address"
            value={formData.Complexion}
            onChange={handleInputChange}
            disabled={!isEditMode}
          />
        </div>
        <div>
          <label>Disablities : </label>
          <input
            type="text"
            name="Disablities"
            value={formData.Disablities}
            onChange={handleInputChange}
            disabled={!isEditMode}
          />
        </div>
        <div>
          <label> Diet: </label>
          <input
            type="text"
            name="Diet"
            value={formData.Diet}
            onChange={handleInputChange}
            disabled={!isEditMode}
          />
        </div>
        <div>
          <label>Spectacles: </label>
          <input
            type="text"
            name="Spectacles"
            value={formData.Spectacles}
            onChange={handleInputChange}
            disabled={!isEditMode}
          />
        </div>
        <div>
          <label> Rashi: </label>
          <input
            type="text"
            name="Rashi"
            value={formData.Rashi}
            onChange={handleInputChange}
            disabled={!isEditMode}
          />
        </div>
        <div>
          <label>Nakshatra: </label>
          <input type='text'
            name="Nakshatra"
            value={formData.Nakshatra}
            onChange={handleInputChange}
            disabled={!isEditMode}
          />
        </div>
        <div>
          <label>Charan : </label>
          <input
            type="text"
            name="Charan"
            value={formData.Charan}
            onChange={handleInputChange}
            disabled={!isEditMode}
          />
        </div>
        <div>
          <label> Nadi: </label>
          <input
            type="text"
            name="Nadi"
            value={formData.Nadi}
            onChange={handleInputChange}
            disabled={!isEditMode}
          />
        </div>
        <div>
          <label>Gan: </label>
          <input
            type="text"
            name="Gan"
            value={formData.Gan}
            onChange={handleInputChange}
            disabled={!isEditMode}
          />
        </div>
        <div>
          <label> Mangal: </label>
          <input
            type="text"
            name="Mangal"
            value={formData.Mangal}
            onChange={handleInputChange}
            disabled={!isEditMode}
          />
        </div>
        <div>
          <label>Educational / Professional Details: </label>
          <input type='text'
            name="EducationalDetail"
            value={formData.EducationalDetail}
            onChange={handleInputChange}
            disabled={!isEditMode}
          />
        </div>
           <div>
          <label> Occupation: </label>
          <input
            type="text"
            name="Occupation"
            value={formData.Occupation}
            onChange={handleInputChange}
            disabled={!isEditMode}
          />
        </div>
        <div>
          <label>Working in City: </label>
          <input
            type="text"
            name="Working_City"
            value={formData.Working_City}
            onChange={handleInputChange}
            disabled={!isEditMode}
          />
        </div>
        <div>
          <label> Income: </label>
          <input
            type="text"
            name="Income"
            value={formData.Income}
            onChange={handleInputChange}
            disabled={!isEditMode}
          />
        </div>
        <div>
          <label>Parents Fullname: </label>
          <input type='text'
            name="Parents_Fullname"
            value={formData.Parents_Fullname}
            onChange={handleInputChange}
            disabled={!isEditMode}
          />
        </div>
         <div>
          <label>Parents Occupation : </label>
          <input type='text'
            name="Parents_Occupation"
            value={formData.Parents_Occupation}
            onChange={handleInputChange}
            disabled={!isEditMode}
          />
        </div> <br /><br /><br />
        {isEditMode ? (
          <div>
            <button onClick={handleSave} id='saveBTn'>Save</button>
          </div>
        ) : (
          <div>
            <button onClick={handleEditToggle} id='saveBTn'>Edit</button>
          </div>
        )}
      </div>
    
    </div>
    </div>
  );
};

export default EnrollData;


