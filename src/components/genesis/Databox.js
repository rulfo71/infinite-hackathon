import '../../styles/Databox.css';

export default function Databox(props) {

  const { title, body, footer, customStyle, externalLink, internalLink } = props

  return (
    <div className={customStyle}>
      <div className='dataBoxTitle'>
        {title}
      </div>
      <hr className='solid' />
      <div className='dataBoxBody'>
        {body}
      </div>
      <hr className='solid' />
      {
        externalLink ?
          <a className='linkFooter' href={externalLink} target="_blank" rel='noreferrer'>
            {footer}
          </a>
          :
          internalLink ?
            <div
              style={{ "cursor": "pointer" }}
              onClick={() => {
                const anchor = document.querySelector(internalLink)
                anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
              }}
            >
              {footer}
            </div>
            :
            <div className='dataBoxFooter'>
              {footer}
            </div>
      }
    </div>
  )
}