import '../styles/Quote.css';
import avatar from '../static/avatar.png'

export default function Quote() {
  return (
    <section className='quoteContainer'>
      <div className='text'>
        “What DXdao and its aligned partners are aiming to accomplish with Infinite is nothing short of revolutionary. I hope to see organizers of Infinite spreading the good word of decentralization throughout the cryptoverse in the future.”
      </div>
      <div className='name'>
        <img src={avatar} alt='avatar' className="logo" />
        <strong>KEENAN LUKE - </strong> DXDAO CONTRIBUTOR
      </div>
    </section>
  )
}