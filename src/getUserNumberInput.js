import { MissionUtils } from '@woowacourse/mission-utils';

const isThreeDigit = (input) => {
    if (input === 3) {
        return true
    } else {
        return false
    }
}

const isNotDuplicated = (input) => {
    if (new Set(input).size === input.length) {
        return true
    } else {
        return false
    }
}

const isAllNumber = (input) => {
    for (str of input) {
        if (parseInt(str) === NaN) {
            return false
        }
    }
    return true
}

const hasNoZero = (input) => {
    for (str of input) {
        if (parseInt(str) === 0) {
            return false
        }
    }
    return true
}

export const getUserNumberInput = async () => {
    return await MissionUtils.Console.readLineAsync('숫자를 입력하세요 : ')
        .then(userNumberInput => {
            if (isThreeDigit(userNumberInput) && isNotDuplicated(userNumberInput) 
                && isAllNumber(userNumberInput) && hasNoZero(userNumberInput)) {
                return userNumberInput
            } else {
                throw new Error('숫자 3자리를 입력해주세요.');
            }
        })
        .catch(err => {
            throw err;
        });
}