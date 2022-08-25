import '../../styles/Databox.css';

export default function Databox(props) {

  const { title, body, footer, customStyle } = props

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
      <div className='dataBoxFooter'>
        {footer}
      </div>
    </div>
  )
}