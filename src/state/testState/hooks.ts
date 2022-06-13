import { useAppSelector, useAppDispatch } from '../hooks'
import { toggleParagraphSource, setTestParagraph, setTestTime, setTestStart, setTestEnd, setTestResult, toggleModal, toggleInfoBox } from '.'
import { result,info } from '../../interfaces'

// hook to easily interact with test state
export const useTestState = () => {
  const dispatch = useAppDispatch()

  const testState = useAppSelector((state) => state.test)
  const toggleSource = (payload: boolean) => dispatch(toggleParagraphSource(payload))
  const setParagraph = (Payload: string[]) => dispatch(setTestParagraph(Payload))
  const setTime = (payload: number) => dispatch(setTestTime(payload))
  const startTest = (payload: boolean) => dispatch(setTestStart(payload))
  const endTest = (payload: boolean) => dispatch(setTestEnd(payload))
  const setResult = (payload: result) => dispatch(setTestResult(payload))
  const _toggleModal = (payload: boolean) => dispatch(toggleModal(payload))
  const _toggleInfoBox = (payload:info)=>dispatch((toggleInfoBox(payload)))

  return { testState, toggleSource, setParagraph, setTime, startTest, endTest, setResult, _toggleModal, _toggleInfoBox }
}
