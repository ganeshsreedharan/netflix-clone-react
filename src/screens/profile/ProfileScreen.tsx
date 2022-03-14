import './ProfileScreen.css'

import React from 'react'
import Nav from '../../components/Nav'
import PlansScreen from '../plan/PlansScreen'
import { IUser } from '../../shared/ICommonMovie'



const ProfileScreen:React.FC<{}> = () => {

  const user:IUser = {
    email:'ganess@ff.com',
    uid:'dddd'
  }
  return (
    <div className="profileScreen">
    <Nav />
    <div className="profileScreen__body">
      <h1>Edit Profile</h1>
      <div className="profileScreen__info">
        <img
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          alt=""
        />
        <div className="profileScreen__details">
          <h2>{user.email}</h2>
          <div className="profileScreen__plans">
            <h3>Plans</h3>
            <PlansScreen />
            <button
              className="profileScreen__signOut"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProfileScreen