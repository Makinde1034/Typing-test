import React, { useState, useRef, useEffect } from 'react'
import styles from './Nav.module.scss'
import { useTestState } from '../../state/testState/hooks'

function Nav() {
  const [isTimeModalOpen, setIsTimeModalOpen] = useState(false)
  const [duration, setDuration] = useState(1)
  const { testState, setTime } = useTestState()
  const [_time, _setTime] = useState(1)
  const nav = useRef(null)

  const Duration = [
    {
      time: 1,
    },
    {
      time: 2,
    },
    {
      time: 5,
    },
  ]

  const closeDropDown = (e: any) => {
    if (nav.current && isTimeModalOpen && !nav.current.contains(e.target)) {
      setIsTimeModalOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', closeDropDown)
  }, [isTimeModalOpen])


  const countDown = () => {
    
    setInterval(()=>{
      setTime(testState.time-1)
    },1000)
  }

  const handleSetTime = (time:number) => {
    setTime(time * 60)
    _setTime(time)
    setIsTimeModalOpen(false)
  }

  return (
    <nav ref={nav} className={styles.nav}>
      <h3>Typing test</h3>
      {testState.testStart ? (
        ""
      ) : (
        <div onClick={() => setIsTimeModalOpen(!isTimeModalOpen)} className={styles.nav__time}>
          <input
            onChange={(e) => setTime(Number(e.target.value))}
            min={1}
            placeholder="Time in minutes"
            type="number"
            value={_time}
          />

          <p className={styles.title}>Set time</p>
          {isTimeModalOpen && (
            <div className={styles.more__time}>
              {Duration.map((item, index) => (
                <div onClick={() => handleSetTime(item.time)} className={styles.more__time__box}>
                  {item.time} {item.time > 1 ? 'Minutes' : 'Minute'}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </nav>
  )
}

export default Nav
