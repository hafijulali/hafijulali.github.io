import React from 'react'
import resume from "../../assets/Sheikh Hafijul Ali's Resume.pdf"

const Buttons = () => {
  return (
    <div className='header__buttons'>
      <a href={resume} className='btn' download>Download Resume</a>
      <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  );
}

export default Buttons;
