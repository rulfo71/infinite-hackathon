import { Link } from 'wouter'

import '../styles/Button.css';

export default function Button(props) {
  const { img, classImg, classText, text, classButton, link, isLocalRedirect } = props
  return (
    <>
      {isLocalRedirect ? (
        <Link href={link}>
          <div className={classButton}>
            <img src={`${img}`} alt={img} className={classImg} />
            <strong className={classText}> {text} </strong>

          </div>
        </Link>
      )
        :
        <a className={classButton} href={link}>
          <img src={`${img}`} alt={img} className={classImg} />
          <strong className={classText}>{text}</strong>
        </a>
      }
    </>
  )
}