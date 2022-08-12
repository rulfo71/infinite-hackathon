import { Link } from 'wouter'
//assets
import infinite from '../static/infinite.svg'
//styles
import '../styles/Header.css';
//components
import Button from './Button';


export default function Header() {

  return (
    <>
      <section className="header">
        <Link href='/'>
          <img src={infinite} alt="" className="title-image" />
        </Link>
        <section className="buttons-right">
          <button className='button button-black'>
            <span class="dot" /> <strong>HOME</strong>
          </button>
          <button className='button-black button'>
            <span class="dot" /> <strong>GENESIS</strong>
          </button>
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
    </>
  )
}