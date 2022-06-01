import React from 'react'
import Header from './Header'
import './Profile.css'
const Profile=() => {
    function update()
{
    alert("Profile Updated Successfully")
}
  return (
      <>
      <Header/>
      <div className='heading'>
          <h1>MY PROFILE</h1>
      </div>
    <div className='profile'>
      <div className='profile-wrapper'>
          <div>
              <img src="./images/image10.jpeg" />
          </div>
          <div className='profile-content'>
              <h4> Name: Rahul kalakoti</h4>
              <h4> email id: rahulkalakoti123@gmail.com</h4>
              <h4> Phone number: +91 7248161682</h4>
              <h4> Username: Hacker </h4>
              <button onClick={update} className="btn btn-primary">Update</button>
          </div>
      </div>
    </div>

    </>
  )
}

export default Profile
