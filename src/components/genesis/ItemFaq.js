import { useState } from 'react';
import '../../styles/ItemFaq.css';

export default function ItemFaq(props) {

  const { question, answer } = props

  const [showAnswer, setShowAnswer] = useState(false)

  const answerClass = showAnswer ? 'answerShown' : 'answerHidden'

  return (
    <div onClick={() => { setShowAnswer(!showAnswer) }} className='itemFaqContainer'>
      <div className='faqQuestion'  >
        <img src='enter-icon-white.png' alt='enter-icon' className='iconQuestion' />
        {question}
      </div>
      <div className={answerClass}>
        {answer}
      </div>
      <hr className='divider' class="solid" />
    </div>
  )
}