// src/Table.js
import React, { useState } from "react";

const Renew = () => {
  
    

  const initialData = [
    {
      srNo: 1,
      name: "John Doe",
      registrationId: "ABC123",
      transactionId: "XYZ456",
      fromStartDay: "2023-07-01",
      endDay: "2023-07-15",
    
    },
    {
      srNo: 2,
      name: "Jane Smith",
      registrationId: "DEF789",
      transactionId: "LMN012",
      fromStartDay: "2023-07-05",
      endDay: "2023-07-20",

    },
  ];

  const [data, setData] = useState(initialData);

  const handleStatusChange = (index) => {
    setData((prevData) => {
      const newData = [...prevData];
      newData[index].isBlocked = !newData[index].isBlocked;
      return newData;
    });
  };
  const [isVisible, setIsVisible] = useState(true);
  
  const handleButtonClick = () => {
    setIsVisible((prevValue) => !prevValue);
  };

  return (
    <table style={{ margin: "auto",width:"70%",justifyContent:"space-around", textAlign:"center",borderTopColor: "coral"}}>
      <thead>
        <tr>
          <th>Sr No.</th>
          <th>Name</th>
          <th>Registration ID</th>
          <th>Transaction ID</th>
          <th>From Start Day</th>
          <th>End Day</th>
         
          <th>Actions</th>
         
        </tr>
      </thead>
      <br />
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.srNo}</td>
            <td>{item.name}</td>
            <td>{item.registrationId}</td>
            <td>{item.transactionId}</td>
            <td>{item.fromStartDay}</td>
            <td>{item.endDay}</td>
            <td>
            <button style={{padding:"10px",backgroundColor:"blueviolet",color:"white",borderRadius:"10px"}} onClick={handleButtonClick}>
            Blocked
    
    </button>
    <button style={{padding:"10px",backgroundColor:"blueviolet",color:"white",borderRadius:"10px"}} onClick={handleButtonClick}>
            Unlocked
    
    </button>
    </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Renew;
