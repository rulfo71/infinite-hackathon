// styles
import '../../styles/Home.css';
// components
import Organizers from '../../components/Organizers';
import InfinitePhrases from '../../components/InfinitePhrases';
import Quote from '../../components/Quote';
import Drop from '../../components/Drop';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Social from '../../components/Social';

export default function Home() {
  return (
    <>
      <section className='homeContainer'>
        <Header />
        <section className='bodyHome'>
          <section className='mainSection'>
            <span class="black-dot" /> <strong className='topText'>INAUGURAL EVENT</strong><br />
            <strong className='mainText'>
              Be part of a new kind of hackerthon in Bogotá: <br /> Infinite Genesis
            </strong>
            <div>
              <Button text='LEARN MORE' classButton='button button-white' img='enter-icon.png' classImg='dot' classText='apply-btn-text' />
            </div>
          </section>
          <InfinitePhrases />
        </section>
      </section>
      <Organizers />
      <Quote />
      <Drop />
      <Social/>
      <Footer />
    </>
  )
}