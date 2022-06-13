import React from 'react'
import styles from './TypingArea.module.scss'

function TypingArea() {
  return (
    <div className={styles.custom}>
     
      <textarea placeholder="Your test starts when you start typing"></textarea>
    </div>
  )
}

export default TypingArea
