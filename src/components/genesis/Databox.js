import '../../styles/Databox.css';

export default function Databox(props) {

  const { title, body, footer, customStyle, externalLink, internalRef } = props

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
          internalRef ?
            <div
              style={{ "cursor": "pointer" }}
              onClick={() => {
                internalRef.current.scrollIntoView({ behavior: 'smooth'});
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