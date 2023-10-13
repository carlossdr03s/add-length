function push (arr, newElement) {
  let newArray

  if (arr.length === 0) {
    newArray = [newElement]
  }

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    newArray = [element, newElement]
  }

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

function loopToSepareteBySpaces (numberToInterateUntilMatchSpaceIndex, value, valueItems) {
  for (let indexOfString = numberToInterateUntilMatchSpaceIndex === 1
    ? 0
    : valueItems.indexOfLastString + 1; indexOfString < value.length; indexOfString++) {
    const stringReceived = value[indexOfString]

    if (stringReceived === ' ') {
      break
    }

    valueItems.singleWordFromValue = valueItems.singleWordFromValue += stringReceived
  }
}

function addLength (value) {
  const valueSpaceIndex = getSpaceIndex(value)
  const arrayOfSeparatedWordsWithLength = []
  let valueItems = {
    singleWordFromValue: ''
  }

  let numberToInterateUntilMatchSpaceIndex = 0

  while (numberToInterateUntilMatchSpaceIndex < valueSpaceIndex.length + 2) {
    if (valueItems?.singleWordFromValue?.length > 0) {
      arrayOfSeparatedWordsWithLength.push(`${valueItems.singleWordFromValue} ${valueItems.singleWordFromValue.length}`)

      valueItems.singleWordFromValue = ''

      valueItems = {
        singleWordFromValue: '',
        indexOfLastString: valueSpaceIndex[numberToInterateUntilMatchSpaceIndex - 1]
      }
    }

    numberToInterateUntilMatchSpaceIndex++
    loopToSepareteBySpaces(numberToInterateUntilMatchSpaceIndex, value, valueItems)
  }

  return arrayOfSeparatedWordsWithLength
}

console.log(addLength('carlinhos the estag'))

module.exports = addLength
