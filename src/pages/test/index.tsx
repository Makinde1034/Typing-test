
import React, { useState, useEffect } from 'react'
import Layout from '../../layout/Layout'
import { useTestState } from '../../state/testState/hooks'
import styles from './index.module.scss'
import { useRouter } from 'next/router'

function Test() {
  const { testState, setResult, _toggleModal,_toggleInfoBox } = useTestState()
  const [currentInput, setCurrentInput] = useState('')
  const router = useRouter()
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(-1)
  const [currentChar, setCurrentChar] = useState('')
  const [isCorrect, setIsCorrect] = useState(0)
  const [notCorrect, setNotCorrect] = useState(0)
  const [typedEntries, setTypedEntrie] = useState(1)
  const [countDown, setCountDown] = useState<number>(testState.time)
  // const [timeTypingStarted, setTimeTypingStarted] = useState(null)
  // const [timeTypingEnded, setTimeTypingEnded] = useState(null)

		
  useEffect(() => {
    if (testState.paragraph.length === 0) {
			_toggleModal(false)
      router.push('/')
    }
  }, [])

	useEffect(() => {
    const infoTwoSeen = localStorage.getItem('info2')
    if (!infoTwoSeen) {
      _toggleInfoBox({
        isInfoBoxOpen: true,
        msg: 'Test will start when you type first character.Press any key to continue.'
      })
      localStorage.setItem('info2', 'info2 has been seen')
    }
  }, [])

  // end test if user has typed all words in paragraph
  useEffect(() => {
    const lasItemInParagraph = testState.paragraph[testState.paragraph.length - 1]
    const indexOfLastItemInParagraph = testState.paragraph.lastIndexOf(lasItemInParagraph)
		console.log(currentWordIndex,indexOfLastItemInParagraph,"check")

    if (currentWordIndex - 1 === indexOfLastItemInParagraph) {
      setResult({
        accuracy: Math.round((isCorrect / (isCorrect + notCorrect)) * 100),
        score: `${isCorrect}/${testState.paragraph.length}`,
        speed: `${typedEntries / 5 / 10000}WPM`,
      })
      _toggleModal(true)
    }
  }, [currentWordIndex])

  const handleKeyDown = (e: any) => {
    // keycode is used to know when space bar is pressed and compare function is called.
    setTypedEntrie(typedEntries + 1)
    // setTimeTypingStarted(Date.now())

    if (e.keyCode === 32) {
      compareWord()
      setCurrentWordIndex(currentWordIndex + 1)
      setCurrentInput('')
      setCurrentCharIndex(-1)
    } else if (e.keyCode === 8) {
      setCurrentCharIndex(currentCharIndex - 1)
      setCurrentChar('')
    } else {
      setCurrentCharIndex(currentCharIndex + 1)
      setCurrentChar(e.key)
    }
  }

  const compareWord = () => {
    // get the current word from the store state with currentLetterIndex.
    const currentWord = testState.paragraph[currentWordIndex]
    const wordsMatch = currentWord === currentInput.trim()
    if (wordsMatch) {
      setIsCorrect(isCorrect + 1)
    } else {
      setNotCorrect(notCorrect + 1)
    }
  }

  const setClassName = (wordIndex: number, charIndex: number, char: string) => {
    if (wordIndex === currentWordIndex && charIndex === currentCharIndex && currentChar) {
      if (char === currentChar) {
        return styles.green
      } else {
        return styles.red
      }
    } else if (wordIndex === currentWordIndex && currentCharIndex >= testState.paragraph[currentWordIndex].length) {
      return styles.red
    } else {
      return ''
    }
  }

  useEffect(() => {
    if (countDown === 0) {
      setResult({
        accuracy: Math.round((isCorrect / (isCorrect + notCorrect)) * 100),
        score: `${isCorrect}/${testState.paragraph.length}`,
        speed: `${typedEntries / 5 / 10000}WPM`,
      })
      _toggleModal(true)
    }
  }, [countDown])

  const start = () => {
    setInterval(() => {
      setCountDown((prev) => {
        if (prev === 0) {
          console.log()
          clearInterval()
        } else {
          return prev - 1
        }
      })
    }, 1000)
  }

  
  return (
    <Layout title="Test page">
      <div className={styles.test}>
      
        <div className={styles.info}>
          <p className={styles.info__score}>
            Your score : {isCorrect}/{testState.paragraph.length}
          </p>
          <p>{countDown > 1 ? `${countDown}S` : 'Time Up'}</p>
        </div>
        <div className={styles.text__box}>
          {testState.paragraph.map((item, index) => (
            <>
              <span>
                {item.split('').map((char, i) => (
                  <span className={`${setClassName(index, i, char)}`} key={i}>
                    {char}
                  </span>
                ))}
              </span>
              <span> </span>
            </>
          ))}
        </div>
        <textarea
          onClick={() => start()}
          onKeyDown={(e) => handleKeyDown(e)}
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          placeholder="Test will start when you type first character.
Press any key to continue."
        />
        {currentInput}
      </div>
    </Layout>
  )
}

export default Test
