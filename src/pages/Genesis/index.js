// styles
import '../../styles/Genesis.css'
// components
import Button from '../../components/Button';
import Header from '../../components/Header';
import Organizers from '../../components/Organizers';
import Databox from '../../components/genesis/Databox';
import Faq from '../../components/genesis/FAQ';
import Drop from '../../components/Drop';
import Social from '../../components/Social';
import Footer from '../../components/Footer';
import bogota from '../../static/bogota.png'
import { useRef } from 'react';

export default function Genesis() {

  const organizersRef = useRef()

  return (
    <>
      <section className='genesisContainer'>
        <Header active='genesis' />
        <div className='genesisText'>
          <strong>
            Introducing Infinite Genesis in Bogotá
          </strong>
        </div>
        <Button
          text='APPLY TO HACK'
          img='enter-icon.png'
          classImg='dot'
          classText='apply-btn-text'
          classButton='button button-white'
          link='https://forms.gle/gKy5XM2YLNP3gNXU9'
        />

        <div className='imgContainer'>
          <img src={bogota} alt='bogota' className='bodyGenesis' />
        </div>
        <div className='bodyContainer'>
          <div className='bodyGenesis bodyText'>
            <strong> Welcome to the inaguration of Infinite. </strong>
            <br />
            <br />
            In this celebratory iniatiation of Infinite, hackers from far and wide will congregate around the beautiful city of Bogotá, Columbia to collaborate, build, and prepare for the coming events at Devcon VI.
            <br />
            <br />
            Infinite arose from an innate desire to provide the industry with a special type of hackathon - a more intimate experience where builders can come to learn with minimal interruptions. Hackers will be able to unleash their innovative and creative energy while avoiding distractions, inefficiencies, and other unnecessary fuss.
          </div>
        </div>
      </section>

        <div className='bodyContainer'>
          <div ref={organizersRef}>
            <Organizers />
          </div>
          <div className='bodyGenesis bodyText uniquePhrase'>
            The most unique take on a “hacker-first” hackathon in Ethereum.
          </div>
          <div className='dataBoxContainer'>
            <Databox
              title='NO NOISE'
              body='Infinite Genesis opted not to seek outside sponsors to minimize distractions and elevate the level of technical experience. Instead, it opted for an aligned co-organization process.'
              footer='Co - Organizers'
              customStyle='databox-left databox column'
              internalRef={organizersRef}
            />
            <Databox
              title='PUBLIC JUDGING'
              body='Judges will be chosen by event organizers; members drawn from involved communities. Both project presentations and judging will be conducted in public featuring real-time results.'
              footer='Learn More'
              customStyle='databox-center databox column'
            />
            <Databox
              title='EAGER MENTORS'
              body='Infinite features a collection of deeply experienced mentors from throughout the Ethereum ecosystem. Hackers can approach mentors for guidance at any time during the event.'
              footer='Apply as Mentor'
              externalLink='https://twitter.com/messages/compose?recipient_id=1544019424382009345'
              customStyle='databox-right databox column'
            />
          </div>
          <div className='bodyGenesis bodyText'>
            <strong> A gorgeous and accommodating venue. </strong>
            <br />
            <br />
            The hackathon of the future will happen in an environment conducive to creation and innovation. Hilton DoubleTree Conference Salitre, in Bogotá Colombia, will house the first of many wandering the Infinite. Weary travellers will have access to breakfast, lunch and dinner, with snacks and refreshments all day long.          <br />
          </div>

          <div className='bodyGenesis bodyText'>
            <strong> A collection of fun prizes. </strong>
            <br />
            <br />
            Infinite will award a variety of interesting rewards to hackers, including medals, NFTs and crypto. Organizers will be hosting their own bounties alongside this.
          </div>
          <Faq />
          <Drop />
          <Social />
          <Footer />
        </div>
    </>
  )
}