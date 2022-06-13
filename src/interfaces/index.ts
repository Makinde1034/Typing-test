
export type result = {
  accuracy : number,
  speed : string,
  score : string,
  
}

export type info = {
  isInfoBoxOpen:boolean
  msg?:string
}

export type testState = {
  isCustomParagraphActive : boolean,
  paragraph : string[],
  time : number,
  testStart:boolean,
  isCountDownActive:boolean,
  testEnd:boolean,
  result: result,
  isModalOpen:boolean,
  info:info

}
