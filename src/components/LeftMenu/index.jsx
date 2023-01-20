import React from 'react';
import Button from '../Button'
import button1 from '../../assets/button1.png'
import button2 from '../../assets/button2.png'
import button3 from '../../assets/button3.png'
import button4 from '../../assets/button4.png'
import '../../styles/LeftMenu.css'

function LeftMenu() {
  return (
    <div className="left_menu">
      <nav className="left_menu__nav">
        <Button to="/" name="1" picture={button1} className={`left_menu__nav__nav_element`}>
        </Button>
        <Button
          to="/" name="2" picture={button2}
          className={`left_menu__nav__nav_element`}
        >
        </Button>
        <Button
          to="/" name="3" picture={button3}
          className={`left_menu__nav__nav_element`}
        >
        </Button>
        <Button
          to="/" name="4" picture={button4}
          className={`left_menu__nav__nav_element`}
        >
        </Button>
      </nav>
      <p className='left_menu__copyright'>Copyright SportSee 2023</p>
    </div>
  )
}

export default LeftMenu