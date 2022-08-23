
import { Outlet, Link } from "react-router-dom";
//assets
import infinite from '../static/infinite.svg'
//styles
import '../styles/Header.css';
//components
import Button from './Button';

export default function Header(props) {

  const { active } = props

  const isActive = (current) => {
    return `button ${current === active ? 'active' : 'inactive'} `;
  }

  return (
    <>
      <section className="header">
        <Link to='/'>
          <img src={infinite} alt="infinite" className="title-image" />
        </Link>
        <section className="buttons-right">
          <Link to='/'>
            <div className={isActive('home')}>
              <span class="dot" /> <strong>HOME</strong>
            </div>
          </Link>
          <Link to='/genesis'>
            <div className={isActive('genesis')}>
              <span class="dot" /> <strong>GENESIS</strong>
            </div>
          </Link>
          <Button
            text='APPLY TO HACK'
            img='enter-icon.png'
            classImg='dot'
            classText='apply-btn-text'
            classButton='button button-white'
            link='https://forms.gle/gKy5XM2YLNP3gNXU9'
          />
        </section>
      </section>
      <Outlet/>
    </>
  )
}