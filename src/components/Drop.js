import '../styles/Drop.css'
import Button from './Button'

import body from '../static/body.png'
import Social from './Social'
import Footer from './Footer'

export default function Drop() {
  return (
    <section className='dropContainer'>
      <div className='dropText'>
        Do you have what it takes to tame the infinite?
      </div>
      <div className='buttonsContainer'>
        <Button
          text='BECOME AN ORGANIZER'
          classButton='button dropButtons button-white'
          img='enter-icon.png'
          classImg='dot'
          classText='apply-btn-text'
          link='https://twitter.com/messages/compose?recipient_id=1544019424382009345'
        />
        <Button
          text='APPLY TO HACK'
          classButton='button dropButtons button-white'
          img='enter-icon.png'
          classImg='dot'
          classText='apply-btn-text'
          link='https://forms.gle/gKy5XM2YLNP3gNXU9'
        />
      </div>
      <img src={body} alt='body' className='imgBody' />
      <Social />
      <Footer />
    </section>
  )
}
