import { infinitePhrases } from '../common'
import '../styles/InfinitePhrases.css'
import InfinitePhrase from './InfinitePhrase'

export default function InfinitePhrases() {
  return (
    <section className='InfinitePhrasesContainer'>
      {infinitePhrases.map((i) => (
        <InfinitePhrase key={i.name} phrase={i.text} />
      ))}
    </section>
  )
}
