import React from 'react';

function Modal(props) {
  const { isOpen, onClose, imageSrc, name, lastName, email, country, role } = props;

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 flex flex-col text-center">

            <div className="mb-4 shadow-2xl rounded-full">
              <img className='w-60 rounded-full' src={imageSrc} alt="" />
            </div>

            <span>Description</span>

            <div className='flex '>
              <span className='font-bold'>Name: </span>
              <span>{name}</span>
            </div>

            <div className='flex '>
              <span className='font-bold'>LastName: </span>
              <span>{lastName}</span>
            </div>

            <div className='flex '>
              <span className='font-bold'>Email: </span>
              <span>{email}</span>
            </div>

            {country != "undefined" && 
            <div className='flex '>
              <span className='font-bold'>Country: </span>
              <span>{country}</span>
            </div>
            }

            <div className='flex '>
              <span className='font-bold'>Role: </span>
              <span>{role}</span>
            </div>


            <div className="mt-4">
              <button onClick={onClose} className="px-4 py-2 bg-gray-900 text-white rounded-lg">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;