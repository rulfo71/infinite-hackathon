import '../../styles/Schedule.css'
import DaySchedule from './DaySchedule'
import { organizers } from '../../common'
import TimeDetail from './TimeDetail'

export default function Schedule() {
  return (
    <section className='schedule-section'>
      <div className='schedule-title'> HACKATHON SCHEDULE </div>
      <div className='days-container'>
        <DaySchedule number='01' title='FRI OCT 7TH'>
          <TimeDetail title='8am: Hacker Registration and Breakfast' />
          <TimeDetail title='9am: Co-Org Presentations'>
            <div className='details details-row'>
              <div className='column-details'>
                {organizers.map((o) =>
                  o.isOrganizer && organizers.indexOf(o) < 3 ? (
                    <div>
                      <span className='white-dot' /> {o.nameWithoutMayus}
                    </div>
                  ) : null
                )}
              </div>
              <div className='column-details'>
                {organizers.map((o) =>
                  o.isOrganizer && organizers.indexOf(o) >= 3 ? (
                    <div>
                      <span className='white-dot' /> {o.nameWithoutMayus}
                    </div>
                  ) : null
                )}
              </div>
            </div>
          </TimeDetail>
          <TimeDetail title='12:30pm:'>
            <div className='details'>
              <div>
                <span className='white-dot' /> Hacking Teams Form
              </div>
              <div>
                <span className='white-dot' /> Lunch
              </div>
            </div>
          </TimeDetail>
          <TimeDetail title='1:30pm: Hacking Instructions' />
          <TimeDetail title='2:00pm: Hacking Begins' />
          <TimeDetail title='2:30pm: Crypto Intro (DXdao)' />
          <TimeDetail title='3:30pm: Solidity Intro (Hopr)' />
          <TimeDetail title='4:30pm: Hardhat Intro' />
          <TimeDetail title='7:30pm: Dinner' customClass='last-time-detail' />
        </DaySchedule>
        <DaySchedule number='02' title='SAT OCT 8TH'>
          <TimeDetail title='Full day of hacking' />
          <TimeDetail title='8:00am: Breakfast' customClass='extra-spacing' />
          <TimeDetail title='12:30pm: Lunch' customClass='extra-spacing' />
          <TimeDetail
            title='2:30pm: Debug and Solidity In-depth'
            customClass='extra-spacing'
          />
          <TimeDetail
            title='7:30pm: Dinner'
            customClass='extra-spacing last-time-detail'
          />
        </DaySchedule>
        <DaySchedule number='03' title='SUN OCT 9TH'>
          <TimeDetail title='Hacking until Midday' />
          <TimeDetail title='8:00am: Breakfast' customClass='extra-spacing' />
          <TimeDetail
            title='12:00pm: Projects Submission Close'
            customClass='extra-spacing'
          />
          <TimeDetail title='12:30pm: Lunch' customClass='extra-spacing' />
          <TimeDetail
            title='1:00pm: Judging Begins'
            customClass='extra-spacing'
          />
          <TimeDetail
            title='3:00pm: Awards Ceremony'
            customClass='extra-spacing'
          />
          <TimeDetail
            title='4:00pm: Infinite Cocktail Hour'
            customClass='extra-spacing last-time-detail'
          />
        </DaySchedule>
      </div>
    </section>
  )
}
