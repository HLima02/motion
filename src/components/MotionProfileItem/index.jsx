import React from 'react'


export default function MotionProfileItem({leftSide, profile, name, specialization, description, education}) {

  return (
    <div className={`profile_content ${leftSide ? 'left_img' : 'right_img'}`}>
      <div className='profile'>
        <img src={profile} />
      </div>
      <div className='especialization'>
        <h3 className='name'>{name}</h3>
        <h4 className='profile_especialization'>{specialization}</h4>

        <p className='description'>{description}</p>

        <h3 className='education'>Educação: </h3>
        <ul >
          {education.map((educationItem, index) => (
            <li key={index}>{educationItem}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
