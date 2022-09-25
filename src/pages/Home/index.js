// styles
import '../../styles/Home.css'
// components
import Organizers from '../../components/Organizers'
import InfinitePhrases from '../../components/InfinitePhrases'
import Drop from '../../components/Drop'
import Header from '../../components/Header'
import Subtitle from '../../components/Subtitle'
import { calculateDropStyle } from '../../common/calculateDropStyle'
import useScrollPosition from '../../hooks/useScrollPosition'
import dropImg from '../../static/Drop.png'
import { useRef } from 'react'
import Footer from '../../components/Footer'
import Social from '../../components/Social'

export default function Home() {
  const scrollPosition = useScrollPosition()

  const dropRef = useRef()
  let dropPosition = dropRef?.current?.offsetTop

  const { dropImgWidth, backgroundDropPosition, displaybackgroundDrop } =
    calculateDropStyle(scrollPosition, dropPosition)

  return (
    <>
      <div
        className='background-drop'
        style={{
          color: `white`,
          top: `${backgroundDropPosition}px`,
          display: `${displaybackgroundDrop}`,
        }}
      >
        <img
          src={dropImg}
          alt='bogota'
          className='bodyGenesis'
          style={{ maxWidth: `${dropImgWidth}%` }}
        />
      </div>
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
          <InfinitePhrases scrollPosition={scrollPosition} />
        </section>
        <Organizers />
      </section>
      <div ref={dropRef}>
        <Drop />
      </div>
      <Social />
      <Footer />
    </>
  )
}
