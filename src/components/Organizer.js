import '../styles/Organizers.css';

export default function Organizer(props) {
  const { logo, name, rol, description, url } = props
  return (
    <>
      <hr className='solid divider' />
      <div className='row'>
        <a className='column brand' href={url} target="_blank" rel='noreferrer'>
          <img src={`${logo}`} alt={name} className="logo" />
          {name}
        </a>
        <div className='column role'>
          <strong> {rol} </strong>
        </div>
        <div className='column extras'>
          <span>
            {description}
          </span>
        </div>
      </div>
    </>
  )
}