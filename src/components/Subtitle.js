import '../styles/Subtitle.css'
import Button from './Button'

export default function Subtitle() {
  return (
    <section className='subtitleSection'>
      <div className='date-field '>7-9 of October 2022</div>
      <div>
        <Button
          text='LEARN MORE'
          classButton='button button-white'
          img='enter-icon.png'
          classImg='dot'
          classText='apply-btn-text'
          link='/genesis'
          isLocalRedirect
        />
      </div>
    </section>
  )
}
