import { BsFillPlayBtnFill } from "react-icons/bs";
import { useState } from 'react'

import './style.scss'

import thumbnail from '../../assets/images/img_01.jpg'

export default function HomeSpaceVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    setIsPlaying(true);
  };

  return (
    <section data-aos="fade-up" className='video_section' id='nosso_espaco'>
      <h2>NOSSO ESPAÇO</h2>

      <div className='iframe_section'>
        {!isPlaying ? (
          <div className='iframe_thumb' onClick={playVideo }>
            <img src={thumbnail} alt='Sala de espera da clinica Motion' />
            <BsFillPlayBtnFill className='icon_player' />
          </div>
        ) : (
          <div className="iframe">
            <iframe
            src="https://firebasestorage.googleapis.com/v0/b/curso-8c607.appspot.com/o/videos%2Fmotion.mp4?alt=media&token=bd642e62-b2c6-4f4e-afbb-9c4c7fe2bb80"
            allow="autoplay; muted"
            allowFullScreen
            ></iframe>
          </div>
          // <video width="100%" controls autoplay muted  >
          //   <source src="https://pu2s0mmwr4wl1xus.public.blob.vercel-storage.com/motion_clinica-1faLeUYJwU7asyJLE60kYV8F86I4Ic.mp4" 
          //   type="video/mp4" />
          // </video>
         )}
        
      </div>
    </section>
  )
}
