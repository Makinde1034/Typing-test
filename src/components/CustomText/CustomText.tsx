import React, { useState, useEffect } from 'react'
import styles from './CustomText.module.scss'
import { useTestState } from '../../state/testState/hooks'

function CustomText() {
  const [text, setText] = useState('')
  const { setParagraph, toggleSource } = useTestState()

  useEffect(() => {
    setParagraph([])
  }, [])

  const setTestParagraph = () => {
    const splittedText = text.split(' ')

    if (!text) {
      alert('you need to add texts')
      return
    }
    setParagraph(splittedText)

    toggleSource(false)
  }

  return (
    <div className={styles.custom}>
      <textarea onChange={(e) => setText(e.target.value)} placeholder="Paste paragraph choice"></textarea>
      <div className={styles.custom__button}>
        <button onClick={() => setTestParagraph()}>Set</button>
      </div>
    </div>
  )
}

export default CustomText
