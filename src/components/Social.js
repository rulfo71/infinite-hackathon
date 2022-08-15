import '../styles/Social.css';
import Button from './Button';

export default function Social() {
  return (
    <section className='socialContainer'>
      <Button        
        classButton='button buttonSocial'
        img='discord-logo.png'
        classImg='socialIcon'
        link='https://t.co/tugnoB0k5m'
        />
      <Button        
        classButton='button buttonSocial buttonSocialMiddle'
        img='twitter-logo.png'
        classImg='socialIcon'
        link='https://twitter.com/InfiniteHackETH'
        />
      <Button        
        classButton='button buttonSocial'
        img='medium-logo.png'
        classImg='socialIcon'
        link='https://dxdao.medium.com/dxdao-announces-infinite-a-collection-of-hacker-first-hackathons-f2976b97dfa2'        
        />
        <div className='socialText'>
          keep up with everything infinite
        </div>
    </section>
  )
}