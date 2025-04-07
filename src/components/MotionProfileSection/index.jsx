import React from 'react'

import MotionProfileItem from '../MotionProfileItem'
import profileList from '../../services/api.profiles'
import './style.scss'

export default function MotionProfileSection() {

  return (
    <section className='profile_section'>
      {profileList.map((item) => (
        <MotionProfileItem key={item.id}
        leftSide={item.leftSide} 
        profile={item.profile} 
        name={item.name} 
        specialization={item.specialization} 
        description={item.description} 
        education={item.education} />
      ))}
      
    </section>
  )
}
