import React, { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import './Profile.scss'
import { profileData } from '../../profile-data'

const Profile = () => {
  const [userProfile, setUserProfile] = useState(profileData)

  const removeProfile = (id) => {
    const newProfileList = userProfile.filter((profile) => profile.id !== id)
    setUserProfile(newProfileList)
  }

  const clearAll = () => {
    setUserProfile([])
  }

  return (
    <section className='profile-sec --flex-center --100vh --bg-primary'>
      <div className='container'>
        <h2 className='--text-light'>User Profile App</h2>
        {userProfile.map((profile) => {
          const { id, name, img, job } = profile
          return (
            <div className='profile --card --flex-between --p' key={id}>
              <img src={img} alt='profile' />
              <div className='desc'>
                <h4 className='--text-light'>Name: {name}</h4>
                <p className='--text-light'>Job: {job}</p>
              </div>
              <FaTrashAlt
                size={18}
                className='icon'
                onClick={() => removeProfile(id)}
              />
            </div>
          )
        })}

        <button className='--btn --btn-danger' onClick={clearAll}>
          Clear All
        </button>
      </div>
    </section>
  )
}

export default Profile
