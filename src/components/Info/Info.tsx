import React,{useEffect} from 'react'
import styles from './Info.module.scss'
import { useTestState } from '../../state/testState/hooks'
import { toggleInfoBox } from '../../state/testState'

function Info() {
  const { testState,_toggleInfoBox } = useTestState()

  useEffect(()=>{
    const infoSeen = localStorage.getItem("info")
    if(!infoSeen) {
        _toggleInfoBox({isInfoBoxOpen:true,msg:"Click custom text to use paragraph of your choice or random text to generate a random paragraph. Set time on top right corner of your screen and click start.Havefun!"})
        localStorage.setItem("info","info has been seen")
    }
  },[])

  return (
    testState.info.isInfoBoxOpen && (
      <div className={styles.info}>
        <p>
          {testState.info.msg}
        </p>
        <button onClick={()=>_toggleInfoBox({isInfoBoxOpen:false})} >Got it</button>
      </div>
    )
  )
}

export default Info
