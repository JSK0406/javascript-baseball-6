import { MissionUtils } from '@woowacourse/mission-utils';

export const getUserNumberInput = MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ').then((input) => {return input});