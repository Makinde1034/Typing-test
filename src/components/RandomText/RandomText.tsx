import React, { useEffect } from 'react'
import styles from './RandomText.module.scss'
import randomwords from 'random-words'
import { useTestState } from '../../state/testState/hooks'
import Link from 'next/link'
import { useRouter } from 'next/router'

function RandomText() {
  const { setParagraph, testState, startTest } = useTestState()
  const router = useRouter()

  useEffect(() => {
    if (testState.paragraph.length === 0) {
      setParagraph(randomwords(100))
    }
  }, [])

  const goToTestPage =() => {
    if(testState.time === 0) {
      alert("set time befor starting test")
      return
    }
    router.push("/test")
    startTest(true)
  }

  return (
    <div className={styles.random}>
      <div className={styles.wrap}>
        {testState.paragraph.map((item, index) => (
          <>
            <span>{item}</span>
            <span> </span>
          </>
        ))}
      </div>
      
        <button onClick={()=>goToTestPage()}>Start test</button>
    
    </div>
  )
}

export default RandomText
