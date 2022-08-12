import { Link } from 'wouter'

import '../styles/Button.css';

export default function Button(props) {
  const { img, classImg, classText, text, classButton, link } = props
  return (
    <>
      {link ? (
        // <div className={classButton}>
          <a className={classButton} href={link}>
            <img src={`${img}`} alt={img} className={classImg} />
            <strong className={classText}>{text}</strong>
          </a>
        // </div>
        )
      :
      (<button className={classButton}>
        <img src={`${img}`} alt={img} className={classImg} />
        <strong className={classText}>{text}</strong>
      </button>)
      }
    </>
  )
}