import '../styles/Footer.css';
import infinite from '../static/infinite.svg'

export default function Footer() {
  return (
    <div className='footerContainer'>
      <img src={infinite} alt='infinite' className='imgFooter' />
    </div>     
  )
}