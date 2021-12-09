import React from 'react'
import Image from 'next/image'
import headerStyles from '../styles/Header.module.css'
import griffith from '../public/images/griffith-hero-img.jpg'
const Header: React.FC = () => {
  return (
    <div>
      {/* <div className={headerStyles.img}>
      <Image src={griffith} alt="griffith observatory" />
      </div> */}
      {/* <h1 className={headerStyles.title}>
        <span>Radius</span> Relocation 
      </h1>
      <p className={headerStyles.description}>Find what matters to you around your next home</p> */}
    </div>
  )
}

export default Header