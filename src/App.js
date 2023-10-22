import { calculateBalls } from "./calculateBalls.js" 
import { calculateStrikes } from "./calculateStrikes.js"
import { getUserNumberInput } from "./getUserNumberInput.js"
import { generateRandomThreeDigitNumber } from "./generateRandomThreeDigitNumber.js"
import { MissionUtils } from '@woowacourse/mission-utils'
import { getHint } from "./getHint.js"
import { getUserGameDecision } from "./getUserGameDecision.js"
import { isGameEnded } from "./isGameEnded.js"
import { isRoundEndedFromHint } from "./isRoundEndedFromHint.js"

class App {
  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.')
    while (true) {
      const computerNumber = generateRandomThreeDigitNumber();
      while (true) {
        const userNumber = await getUserNumberInput()
        const hint = getHint(userNumber, computerNumber);
        MissionUtils.Console.print(hint);
        if (isRoundEndedFromHint(hint) === true) {
          break;
        }
      }
      const decision = await getUserGameDecision();
      if (isGameEnded(decision) === true) {
        break;
      }
    }
    return
  }
}

const app = new App();
app.play();

export default App;
