import infinite from '../static/infinite.svg'
import { Link } from 'wouter'
import '../styles/Header.css';

export default function Header() {

    return (
        <>
            <section className="info-text title-text">
                <Link href='/'>
                    <img src={infinite} alt="" className="title-image" />
                    <br />
                    <strong className='float-left'>GENESIS EDITION</strong>
                    <strong className="float-right"> #0 </strong>
                </Link>
            </section>
            <section className='item'>
                <div className="info-text"><span className="dot"></span> <strong>Date</strong> 7-9 October 2022</div>
                <div className="info-text itemRight"><span className="dot"></span> <strong>Location</strong> Bogota Colombia </div>
            </section>
        </>
    )
}