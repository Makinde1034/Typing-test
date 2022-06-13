import { useEffect } from 'react'
import Layout from '../layout/Layout'
import styles from './index.module.scss'
import CustomText from '../components/CustomText/CustomText'
import RandomText from '../components/RandomText/RandomText'
import { useTestState } from '../state/testState/hooks'
import randomwords from 'random-words'


const IndexPage = () => {
  const { testState, toggleSource, setParagraph, } = useTestState()

  useEffect(()=>{
    // toggleModal(false)
  },[])

  const generateRandomTexts = () => {
    setParagraph([])
    toggleSource(false)
    setParagraph(randomwords(100))
  }

  const useCustomText = () => {
    toggleSource(true)
    
  }

  return (
    <Layout title="Home | Typing test Challenge">
      <div className={styles.container}>
        <div className={styles.container__buttons}>
          <button onClick={() => useCustomText()}>Custom text</button>
          <button onClick={() => generateRandomTexts()}>Random text</button>
        </div>

        {testState.isCustomParagraphActive ? <CustomText /> : <RandomText />}
      
      </div>
    </Layout>
  )
}

export default IndexPage
