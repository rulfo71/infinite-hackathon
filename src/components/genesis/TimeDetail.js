import '../../styles/Schedule.css'

export default function TimeDetail(props) {
  const { title, children, customClass } = props
  return (
    <div className={`time-and-title ${customClass ? customClass : ''}`}>
      {title}
      {children}
    </div>
  )
}
