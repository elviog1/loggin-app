import React, { useState } from 'react';
import Modal from './Modal';

function ImageWithModal(props) {
  const { imageSrc, name, lastName, email, country, role } = props;

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div onClick={openModal}>
        <img className='w-28 rounded-full cursor-pointer' src={imageSrc} alt="" />
      </div>
      <Modal 
        isOpen={modalIsOpen} 
        onClose={closeModal} 
        imageSrc={imageSrc} 
        name={name} 
        lastName={lastName} 
        email={email} 
        country={country} 
        role={role} 
      />
    </>
  );
}

export default ImageWithModal;