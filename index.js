function push (arr, newElement) {
  let newArr

  if (arr.length === 0) {
    newArr = [newElement]
  }

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    newArr = [element, newElement]
  }

  return newArr
}

function getSpaceIndex (value) {
  let indexArr = []
  for (let i = 0; i < value.length; i++) {
    const element = value[i]

    if (element === ' ') {
      indexArr = push(indexArr, i)
    }
  }

  return indexArr
}

// function separeteByIndex (value) {
//   const indexOfSpace = getSpaceIndex(value)
//   let newArr = []
//   let word = ''

//   for (let indexOfString = 0; indexOfString < value.length; indexOfString++) {
//     const element = value[indexOfString]
//     for (let i = 0; i < indexOfSpace.length; i++) {
//       const index = indexOfSpace[i]

//       if (indexOfString < index) {
//         word = element
//         newArr = push(newArr, element)
//       }
//     }
//   }

//   console.log(word);
//   return newArr
// }

function removeElementFromString (value, stringToRemove) {
  // loop to repeat for until all s was cleared
  //
  const valueSpaceIndex = getSpaceIndex(value)
  const mutableString = value
  const arr = []
  let newS = ''
  let newString = {
    string: newS
  }

  const contOfImmutableString = getSpaceIndex(value).length + 1
  const countOfManipulatedString = getSpaceIndex(newS).length + 1

  // console.log({
  //   valueSpaceIndex: valueSpaceIndex[0]
  // });

  const isSpaceOfManipulatedValueDifferentFromValue = contOfImmutableString - 1 === countOfManipulatedString

  // console.log({
  //   isSpaceOfManipulatedValueDifferentFromValue
  // });

  //  montar palavra, compara com a stringToRemove, é diferente? coloca em newS
  // buena > jajajaja
  // quando terminar o loop?
  // quantidade de espaços > get space by index - 1
  let n = 0

  // fazer o loop ok, como parar
  while (n <= valueSpaceIndex.length + 1) {
    if (newString.string.length > 0) {
      arr.push(`${newString.string} ${newString.string.length}`)
      newS = ''
      newString = {
        string: '',
        indexOfLastString: valueSpaceIndex[n] === undefined ? valueSpaceIndex[valueSpaceIndex.length - 1] : valueSpaceIndex[n - 1]
      }
    }

    n++

    for (let indexOfString = n === 1 ? 0 : newString.indexOfLastString + 1; indexOfString < value.length; indexOfString++) {
      const stringReceived = mutableString[indexOfString]
      if (stringReceived === ' ') {
        break
      }

      newS += stringReceived

      newString.string = newS

      // console.log(newS);

      // countOfManipulatedString = getSpaceIndex(newS).length + 1

      // console.log(newS);
    }
  }

  // interar dnv, mas o value precisar tirar o valor adicionado a nova variavel

  // console.log(mutableString);
  console.log({ arr })
}

removeElementFromString('you will win', 'bot')

/// // chegar naquele index, parar, remover o index q foi adicionado (ou colocar em uma variavel oq foi feito), fazer o loop novamente
// buena bot > buena > value = bot

function separeteBySpaces (value) {
  const spaceIndexArr = getSpaceIndex(value)
  // console.log(spaceIndexArr);
  let arrOfSeparetedWords = []
  const manipulatedValue = value
  let w = ''
  const wordWithNumber = []

  // voltar pra ca, usando o while para interar dnv, com a funcao removeElementFromString removendo oq foi
  // colocado em array da string manipulatedValue
  // while (condition) {

  // }

  for (let indexWord = 0; indexWord < manipulatedValue.length; indexWord++) {
    const word = manipulatedValue[indexWord]

    w = w + word
    if (word === ' ') {
      break
      // console.log('entrou');
    }
  }

  wordWithNumber.push(arrOfSeparetedWords[arrOfSeparetedWords.length - 1])
  arrOfSeparetedWords = []

  // console.log(wordWithNumber);

  return wordWithNumber
}

function addLength (str) {
  const arr = separeteBySpaces(str)
  // const newArr = push([str], arr)

  // for (let i = 0; i < str.length; i++) {
  //   const element = str[i]

  // }

  return arr
}

// console.log(addLength('buena bot jajaja'))

module.exports = addLength
