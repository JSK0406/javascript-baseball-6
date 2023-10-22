import { calculateBalls } from "./calculateBalls.js"
import { calculateStrikes } from "./calculateStrikes.js"

export const getHint = (userNumber, computerNumber) => {
    const cntBall = calculateBalls(userNumber, computerNumber)
    const cntStrike = calculateStrikes(userNumber, computerNumber)
    
    let hintMsgList = [];

    if (cntBall > 0) {
        hintMsgList.push(`${cntBall}볼`) 
    }

    if (cntStrike > 0) {
        hintMsgList.push(`${cntStrike}스트라이크`)
    }

    if (hintMsgList.length === 0) {
        return '낫싱'
    } else {
        return hintMsgList.join(' ')
    }
}