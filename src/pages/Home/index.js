// styles
import '../../styles/Home.css'
// components
import Organizers from '../../components/Organizers'
import InfinitePhrases from '../../components/InfinitePhrases'
import Drop from '../../components/Drop'
import Header from '../../components/Header'
import Subtitle from '../../components/Subtitle'

export default function Home() {
  return (
    <>
      <section className='homeContainer'>
        <Header active='home' />
        <section className='bodyHome'>
          <section className='mainSection'>
            <div className='top-text'>
              <span class='black-dot' /> <strong>INAUGURAL EVENT</strong>
            </div>
            <br />
            <div className='mainText'>
              Be part of a new kind of hackathon in Bogotá: <br /> Infinite
              Genesis
            </div>
          </section>
          <Subtitle />
          <InfinitePhrases />
        </section>
        <Organizers />
      </section>
      <Drop />
    </>
  )
}
