
export const digitToDoubleCharacter = (num: Number) => {
    return num.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
}