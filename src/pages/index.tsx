import { useEffect } from 'react'
import Layout from '../layout/Layout'
import styles from './index.module.scss'
import CustomText from '../components/CustomText/CustomText'
import RandomText from '../components/RandomText/RandomText'
import { useTestState } from '../state/testState/hooks'
import randomwords from 'random-words'
import { useSpring, animated } from 'react-spring'

const IndexPage = () => {
  const { testState, toggleSource, setParagraph,startTest } = useTestState()
  const props = useSpring({ to: { opacity: 1, }, from: { opacity: 0,  }, delay: 100 })

  useEffect(() => {
    
    startTest(false)
  }, [])

  const generateRandomTexts = () => {
    setParagraph([])
    toggleSource(false)
    setParagraph(randomwords(100))
  }

  const _useCustomText = () => {
    toggleSource(true)
  }

  return (
    <Layout title="Home | Typing test Challenge">
      <animated.div style={props} className={styles.container}>
        <div data-testid="buttons" className={styles.container__buttons}>
          <button onClick={() => _useCustomText()}>Custom text</button>
          <button onClick={() => generateRandomTexts()}>Random text</button>
        </div>

        {testState.isCustomParagraphActive ? <CustomText /> : <RandomText />}
      </animated.div>
    </Layout>
  )
}

export default IndexPage
