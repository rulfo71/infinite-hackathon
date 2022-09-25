import { infinitePhrases } from '../common'
import '../styles/InfinitePhrases.css'
import InfinitePhrase from './InfinitePhrase'

export default function InfinitePhrases(props) {
  const { scrollPosition } = props
  return (
    <section className='InfinitePhrasesContainer'>
      {infinitePhrases.map((i) => (
        <InfinitePhrase
          key={i.name}
          phrase={i.text}
          scrollPosition={scrollPosition}
        />
      ))}
    </section>
  )
}
