// styles
import '../../styles/Home.css';
// components
import Organizers from '../../components/Organizers';
import InfinitePhrases from '../../components/InfinitePhrases';
import Drop from '../../components/Drop';
import Header from '../../components/Header';
import Button from '../../components/Button';

export default function Home() {
  return (
    <>
      <section className='homeContainer'>
        <Header active='home' />
        <section className='bodyHome'>
          <section className='mainSection'>
            <div className='top-text'>
              <span class="black-dot" /> <strong>INAUGURAL EVENT</strong>
            </div>
            <div className='mainText'>
              Be part of a new kind of hackathon in Bogotá: <br /> Infinite Genesis
            </div>
            <div>
              <Button text='LEARN MORE' classButton='button button-white' img='enter-icon.png' classImg='dot' classText='apply-btn-text' link='/genesis' isLocalRedirect />
            </div>
          </section>
          <InfinitePhrases />
        </section>
        <Organizers />
      </section>
      <Drop />      
    </>
  )
}