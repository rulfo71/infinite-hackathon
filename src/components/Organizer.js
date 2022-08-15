import '../styles/Organizers.css';

export default function Organizer(props) {
  const { logo, name, rol, description } = props
  return (
    <div className='row'>
      <hr className='solid divider' />
      <div className='column brand'>
        <img src={`${logo}`} alt={name} className="logo" />
        {name}
      </div>
      <div className='column extras'>
        <strong> {rol} </strong>
      </div>
      <div className='column extras'>
        <span>
          {description}
        </span>
      </div>
    </div>
  )
}