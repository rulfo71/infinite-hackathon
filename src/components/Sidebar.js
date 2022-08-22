//external imports
import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';
import { useState } from "react";

//styles
import '../styles/Sidebar.css';

//internal imports
import Button from './Button';
import infinite from '../static/infinite-white-background.png'
import cross from '../static/cross.png'
import burger from '../static/burger-button.png'



export default function Sidebar(props) {

  const [isOpen, setOpen] = useState(false)

  const handleIsOpen = () => {
    setOpen(!isOpen)
  }

  const closeSideBar = () => {
    setOpen(false)
  }

  return (
    <Menu isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen} width={'100%'} right customBurgerIcon={<img src={burger} className='imgBurgerButton' alt='burger' />} customCrossIcon={<img src={cross} alt='cross' />}>
      <div className='headerBurger'>
        <img src={infinite} alt="infinite" className="infinite-image-sidebar" />
      </div>
      <div className='bodyBurger' >
        <Link className="menu-item" to='/'  onClick={closeSideBar}>
          <span class="dotburger" /> <strong>HOME</strong>
        </Link>
        <Link className="menu-item" to='/genesis'  onClick={closeSideBar}>
          <span className="dotburger" /> <strong>GENESIS</strong>
        </Link>
      </div>
      <div className='footerBurger' >
        <Button
          text='APPLY TO HACK'
          img='enter-icon.png'
          classImg='dot'
          classText='apply-btn-text'
          classButton='button buttons-footer-sidebar'
          link='https://forms.gle/gKy5XM2YLNP3gNXU9'
        />
        <Button
          text='BECOME AN ORGANIZER'
          img='enter-icon.png'
          classImg='dot'
          classText='apply-btn-text'
          classButton='button buttons-footer-sidebar'
          link='https://twitter.com/messages/compose?recipient_id=1544019424382009345'
        />
      </div>
    </Menu>
  );
};