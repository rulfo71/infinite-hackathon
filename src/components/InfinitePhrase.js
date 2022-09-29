import { useRef } from 'react'
import '../styles/InfinitePhrases.css'

export default function InfinitePhrase(props) {
  const { phrase, scrollPosition } = props

  const ref = useRef()

  const positionOfElementInTheMiddle = ref.current?.offsetTop
    ? ref.current?.offsetTop -
      window.innerHeight / 2 +
      ref.current?.offsetHeight / 2
    : 1

  let opacity =
    Math.abs(scrollPosition - positionOfElementInTheMiddle) < 40 ? 1 : 0.2

  opacity = opacity < 0.1 ? 0.1 : opacity

  return (
    <>
      <div
        ref={ref}
        style={{ opacity: `${opacity}` }}
        className='infinitePhrase'
      >
        {phrase}
      </div>
      <hr className='infinitePhraseDivider' />
    </>
  )
}
