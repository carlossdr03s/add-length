function push (arr, newElement) {
  let newArray

  if (arr.length === 0) {
    newArray = [newElement]
  }

  newArray = [...arr, newElement]

  return newArray
}

function getSpaceIndex (value) {
  let arrayOfIndexes = []
  for (let i = 0; i < value.length; i++) {
    const elementFromString = value[i]

    if (elementFromString === ' ') {
      arrayOfIndexes = push(arrayOfIndexes, i)
    }
  }

  return arrayOfIndexes
}

function loopToSepareteBySpaces (value, valueItems) {
  const convertedString = valueItems.indexOfLastString === 0 ? 0 : valueItems.indexOfLastString + 1
  for (let indexOfString = convertedString; indexOfString < value.length; indexOfString++) {
    const stringReceived = value[indexOfString]

    if (stringReceived === ' ') {
      break
    }

    valueItems.singleWordFromValue = valueItems.singleWordFromValue += stringReceived
  }
}

function addLength (value) {
  const valueSpaceIndex = getSpaceIndex(value)
  let arrayOfSeparatedWordsWithLength = []
  let valueItems = {
    singleWordFromValue: '',
    indexOfLastString: 0
  }

  let numberToInterateUntilMatchSpaceIndex = 0

  while (numberToInterateUntilMatchSpaceIndex <= valueSpaceIndex.length + 1) {
    if (valueItems?.singleWordFromValue?.length > 0) {
      arrayOfSeparatedWordsWithLength = push(arrayOfSeparatedWordsWithLength,
        `${valueItems.singleWordFromValue} ${valueItems.singleWordFromValue.length}`)

      valueItems.singleWordFromValue = ''
      valueItems = {
        singleWordFromValue: '',
        indexOfLastString: valueSpaceIndex[numberToInterateUntilMatchSpaceIndex - 1]
      }
    }

    loopToSepareteBySpaces(value, valueItems)
    numberToInterateUntilMatchSpaceIndex++
  }

  return arrayOfSeparatedWordsWithLength
}

console.log(addLength('carlinhos the estag'))

module.exports = addLength
