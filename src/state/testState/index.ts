import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { testState, result, info } from '../../interfaces'

const initialState: testState = {
  isCustomParagraphActive: false,
  paragraph: [],
  time: 60,
  testStart: false,
  isCountDownActive: false,
  testEnd: false,
  isModalOpen: false,
  info: {
    isInfoBoxOpen: false,
    msg: '',
  },

  result: {
    accuracy: 0,
    speed: '',
    score: '',
  },
}

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    toggleParagraphSource: (state, action: PayloadAction<boolean>) => {
      state.isCustomParagraphActive = action.payload
    },
    setTestParagraph: (state, action: PayloadAction<string[]>) => {
      state.paragraph = action.payload
    },
    setTestStart: (state, action: PayloadAction<boolean>) => {
      state.testStart = action.payload
    },
    setTestTime: (state, action: PayloadAction<number>) => {
      state.time = action.payload
    },
    setTestEnd: (state, action: PayloadAction<boolean>) => {
      state.testEnd = action.payload
    },
    setTestResult: (state, action: PayloadAction<result>) => {
      state.result = action.payload
    },
    toggleModal: (state, action: PayloadAction<boolean>) => {
      state.isModalOpen = action.payload
    },
    toggleInfoBox: (state, action: PayloadAction<info>) => {
      state.info.msg = action.payload.msg
      state.info.isInfoBoxOpen = action.payload.isInfoBoxOpen
    },
  },
})

export default testSlice.reducer

export const {
  toggleParagraphSource,
  setTestParagraph,
  setTestTime,
  setTestStart,
  setTestEnd,
  setTestResult,
  toggleModal,
  toggleInfoBox,
} = testSlice.actions
