import '../../styles/Schedule.css'

export default function TimeDetail(props) {
  const { title, children, customClass } = props
  return (
    <div className={`${customClass ? customClass : ''} time-and-title `}>
      {title}
      {children}
    </div>
  )
}
