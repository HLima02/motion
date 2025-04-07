import React from 'react'

import './style.scss'

export default function ServiceBanner({title}) {
  return (
    <section className='service_banner'>
      <div className='service_banner_txt'>
        <h1>{title}</h1>
      </div>
    </section>
  )
}
