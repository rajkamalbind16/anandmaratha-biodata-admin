import React, { useState } from 'react';
import './Enroll.scss';

import Modal from './EnrollData';

const Enroll = () => {
  const [data, setData] = useState([
    { name: 'John Doe' },
    { name: 'Jane Smith' },
    { name: 'Bob Johnson' },
  ]);

  const handleShow = (index) => {
    // Implement your show logic here (e.g., display a modal or more information about the item).
    showModal(data[index]);
  };

  const handleDelete = (index) => {
    // Create a new array without the item at the specified index and update the state.
    setData((prevData) => prevData.filter((_, i) => i !== index));
  };

  // State to manage modal visibility and data
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState(null);

  // Function to show the modal with data
  const showModal = (data) => {
    setModalData(data);
    setModalVisible(true);
  };

  // Function to hide the modal
  const hideModal = () => {
    setModalVisible(false);
    setModalData(null);
  };

  const Table = ({ data, onDelete, onShow }) => {
    return (
      <table className='myTable'>
        <thead>
          <tr>
            <th>SL No</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>
                <button onClick={() => onShow(index)}>Show</button>
                <button onClick={() => onDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <>
      <div className='enrollContainer'>
        <h1>Enroll</h1>

        <div>
          <Table data={data} onDelete={handleDelete} onShow={handleShow} />
        </div>
      </div>

      {/* Show EnrollData component as a modal */}
      {isModalVisible && (
        <Modal show={isModalVisible} onClose={hideModal} data={modalData} />
      )}
    </>
  );
};

export default Enroll;
