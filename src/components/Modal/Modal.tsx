import React from 'react'
import styles from './Modal.module.scss'
import { useTestState } from '../../state/testState/hooks'
import { useRouter } from 'next/router'

function Modal() {
  const { testState, _toggleModal , startTest, setParagraph} = useTestState()
  const router = useRouter()

  const playAgain = () => {
    _toggleModal(false)
    setParagraph([])
    router.push("/")
    startTest(false)
  }

  return (
    testState.isModalOpen && (
      <div className={styles.modal}>
        <div className={styles.result}>
          <header>
            <h3>Result</h3>
          </header>
          <div className={styles.result__list} >
            <p>Accuracy : {testState.result.accuracy}%</p>
            <p>Score : {testState.result.score}</p>
            <p>Speed : {testState.result.speed}</p>
          </div>
          <button onClick={()=>playAgain()} >Start new test</button>
        </div>
      </div>
    )
  )
}

export default Modal
