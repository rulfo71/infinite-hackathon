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

  let opacityCalculated = Math.abs(
    Math.abs(scrollPosition) / positionOfElementInTheMiddle
  )

  let opacity =
    opacityCalculated > 1
      ? Math.abs(opacityCalculated - 2)
      : opacityCalculated - 0.4

  opacity = opacity < 0.1 ? 0.1 : opacity

  console.log('opacity: ', opacity)
  console.log('scrollPosition: ', scrollPosition)
  console.log('ref: ', ref)

  return (
    <div ref={ref} style={{ opacity: `${opacity}` }} className='infinitePhrase'>
      {phrase}
    </div>
  )
}
