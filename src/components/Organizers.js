import '../styles/Organizers.css';

import { organizers } from '../common';
import Organizer from './Organizer';

export default function Organizers() {
  return (
    <section className='organizers'>
      <div className='title'>
        Organizers
      </div>
      <div className='subtitle'>
        As an open brand, the organization of infinite events are also, well, infinite
      </div>
      <div className='gridContainer'>
        {organizers.map(o => <Organizer key={o.name} logo={o.logo} name={o.name} rol={o.rol} description={o.description} url={o.url} />)}
        <hr className='divider solid' />
      </div>
      <div className='row' style={{justifyContent: 'center'}}>
        <a href="https://taikai.network/" target="_blank" rel='noreferrer'>
          <img src='taikai.png' alt='taikai' className="taikai-logo" />
        </a>
        <strong> Hackathon Management Platform Provider </strong>
      </div>
    </section>
  )
}