import '../../styles/Databox.css'

export default function Databox(props) {
  const { title, body, footer, customStyle, externalLink, internalRef } = props

  return (
    <div className={customStyle}>
      <div className='dataBoxTitle'>{title}</div>
      <hr className='solid databoxDivider' />
      <div className='dataBoxBody'>{body}</div>
      {footer.length > 0 && (
        <div>
          <hr className='solid databoxDivider' />
          {externalLink ? (
            <div className='dataBoxFooter'>
              <a
                className='linkFooter'
                href={externalLink}
                target='_blank'
                rel='noreferrer'
              >
                <span class='databox-footer-dot' /> {footer}
              </a>
            </div>
          ) : internalRef ? (
            <div
              className='dataBoxFooter'
              style={{ cursor: 'pointer' }}
              onClick={() => {
                internalRef.current.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <span class='databox-footer-dot' /> {footer}
            </div>
          ) : (
            <div className='dataBoxFooter'>{footer}</div>
          )}
        </div>
      )}
    </div>
  )
}
