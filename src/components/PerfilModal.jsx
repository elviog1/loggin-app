import React, { useEffect, useState } from 'react'

export default function PerfilModal(user) {
    const userData = user.user
    console.log(userData)
  return (
    <section>
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
        <div className="modal-box relative">
            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="text-lg font-bold text-center">Description</h3>
            <div className='flex gap-3'>
                <div className=''>
                    <img src={userData.picture || userData.photo} alt='avatar user' className='w-40 rounded-full'/>
                </div>
                <div className='flex flex-col gap-3'>
                    <div>
                        <label>Name:</label>
                        <span>{userData.given_name || userData.name}</span>
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <span>{userData.family_name || userData.lastName}</span>
                    </div>
                    <div>
                        <label>Email:</label>
                        <span>{userData.email}</span>
                    </div>
                    <div>
                        <label>Country:</label>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}
