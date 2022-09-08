import '../../styles/Faq.css';
import ItemFaq from './ItemFaq';
import { faqs } from '../../common';

export default function Faq() {
  return (
    <section className="faq">
      <div className="title">FAQ</div>
      <hr className="divider" class="solid" />
      {faqs.map((o) => (
        <ItemFaq key={o.question} question={o.question} answer={o.answer} />
      ))}
    </section>
  );
}
