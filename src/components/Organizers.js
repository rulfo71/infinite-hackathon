import '../styles/Organizers.css';

import Organizer from './Organizer';

const organizers = [
  {
    logo: 'dxdao.png',
    name: 'DXDAO',
    rol: 'INFINIT INITIATOR',
    description:'DECENTRALIZATION SUPER SOLDIER'
  },
  {
    logo: 'hopr.png',
    name: 'HOPR',
    rol: 'GENESIS CO-ORGANIZER',
    description:'PRIVACY PIONEERS'
  },
  {
    logo: 'brink.png',
    name: 'BRINK',
    rol: 'GENESIS CO-ORGANIZER',
    description:'AUTOMATION AFICIANDOS'
  },
  {
    logo: 'join.png',
    name: 'JOIN US',
    rol: 'BECOME AN ORGANIZER',
  },

]


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

      {organizers.map(o => <Organizer key={o.name} logo={o.logo} name={o.name} rol={o.rol} description={o.description} />)}
      <hr className='divider' class="solid" />
      </div>
    </section>
  )
}