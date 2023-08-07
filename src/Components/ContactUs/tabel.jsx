import React, { useState ,useEffect } from 'react';
import './tabel.css';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { IoMdArrowDropdown } from 'react-icons/io';
const User = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [form, setForm] = useState('');
  const [formDevice, setFormDevice] = useState('');
  const [active, setActive] = useState('All');
  const [selectedValue, setSelectedValue] = useState('helper');

  const [filter, setFilter] = useState("All");
  const [allUsers, setAllUsers] = useState()


  const handleShowOptions = () => {
    setShowOptions(true);
  };



  useEffect(() => {
    loadUsers();

  }, [])

  const nevigate = useNavigate()
  const token = localStorage.getItem("userToken");
  console.log(token, "token");
  const loadUsers = async () => {

console.log("loadusers")
   

  };
  const handleDecisionChange = (event) => {

    setSelectedValue(event.target.value);
  };
  const UserDetail=[
    {
   
    
      Name:'@argha',
      Email:"mail@IoMdRainy.com",
      Phone: "9090090990",
      Message: 'kokokokookkokoko',
      decision: (
      <select
        value={selectedValue}
        onChange={handleDecisionChange}
        id='decisionUser'
      >
        <option value=''>Select an option</option>
        <option value='Subadmin'>Reply</option>
        <option value='countyadmin'>Delete</option>
        
      </select>
    ),

      
    },

    {

        Name:'@baba',
        Email:"mail@IoMdRainy.com",
        Phone: "9090090990",
        Message: 'kokokokookkokoko',
        decision: (
        <select
          value={selectedValue}
          onChange={handleDecisionChange}
          id='decisionUser'
        >
          <option value=''>Select an option</option>
          <option value='Subadmin'>Reply</option>
          <option value='countyadmin'>Delete</option>
          
        </select>
      ),
  

    },
    {
        Name:'@mama',
        Email:"mail@IoMdRainy.com",
        Message: 'kokokokookkokoko',
        Phone: "9090090990",
        decision: (
        <select
          value={selectedValue}
          onChange={handleDecisionChange}
          id='decisionUser'
        >
          <option value=''>Select an option</option>
          <option value='Subadmin'>Reply</option>
          <option value='countyadmin'>Delete</option>
          
        </select>
      ),
  

    },
    {
        Name:'@lala',
        Email:"mail@IoMdRainy.com",
        Phone: "9090090990",
        Message: 'kokokokookkokoko',
        decision: (
        <select
          value={selectedValue}
          onChange={handleDecisionChange}
          id='decisionUser'
        >
          <option value=''>Select an option</option>
          <option value='Subadmin'>Reply</option>
          <option value='countyadmin'>Delete</option>
          
        </select>
      ),
  

    },
  ];


  const handleActive = (e) => {
    const name = e.target.getAttribute('name');
    setActive(name);
    setFilter(name);
    console.log(active,"267")
    console.log(filter,"268")
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleCancel = () => {
    setForm('');
    setFormDevice('')
  };

  const handleGift = () => {
    setForm('Active');
  };
  const handleGiftDevice = () => {
    setFormDevice('Active');
  };
 



  const UserList = ({ Name,Phone, Email, Message, decision }) => {
    return (
      <tr className='userPanalDetailsList'>

       
        <td>{Name}</td>
        <td>{Email}</td>
        <td>{Phone}</td>
        <td>{Message}</td>
        <td>{decision}</td>
        
        
        
        <td> <button>Save</button></td>

      </tr>
    );
  };

  const ITEMS_PER_PAGE = 10; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const currentPageData = UserDetail.slice(startIndex, endIndex);
  const totalPages = Math.ceil(UserDetail.length / ITEMS_PER_PAGE);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={currentPage === i ? 'active' : ''}
          id='pageNo'
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <>
      <div className='mainUserContainer'>
        <div>
          
          <div className='userPanalDetails'>
            <div className='userPanalDetailsHeading'>
              
            </div>
            <div className='userPanalDetailsConatiner'>
              <table className='userPanalDetailsList'>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Message</th>
                    <th>Reply/Delete</th>
                    <th>Save</th>
                   
                  </tr>
                </thead>
                <tbody>

{currentPageData.map((theAghori) => {
  console.log(filter ,"566");
  if (theAghori) {
    return <UserList key={theAghori.sl} {...theAghori} />;
  }
  return null;
})}


                </tbody>
              </table>
              <div className='pagination'>
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  id='pageNo'
                >
                  <BsArrowLeft />
                </button>
                {getPageNumbers()}
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  id='pageNo'
                >
                  <BsArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
