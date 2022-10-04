import '../../styles/Schedule.css'

export default function DaySchedule(props) {
  const { number, title, children } = props

  return (
    <article className='day-article'>
      <div className='day-number'> {number} </div>
      <div className='date-title'> {title} </div>
      {children}
      <div className='footer-day-schedule'>
        <div className='time-and-title'>All day:</div>
        <div className='details'> Refreshment and Snacks</div>
      </div>
    </article>
  )
}
