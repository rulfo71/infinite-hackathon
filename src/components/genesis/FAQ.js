import '../../styles/Faq.css';
import ItemFaq from './ItemFaq';
import { faqs } from '../../common';

export default function Faq() {
  return (
    <section className='faq'>
      <h1 className='title'>
        FAQ
      </h1>
      {faqs.map(o => <ItemFaq key={o.question} question={o.question} answer={o.answer} />)}
    </section>
  )
}