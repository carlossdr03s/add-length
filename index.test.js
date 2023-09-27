/* eslint-disable no-undef */
const addLength = require('./index')

test('gives two words', () => {
  expect(addLength('apple ban')).toEqual(['apple 5', 'ban 3'])
})

// test('passes an empty array', () => {
//   expect(addLength('you will win')).toEqual(['you 3', 'will 4', 'win 3'])
// })

// test('passes a number', () => {
//   expect(addLength(2)).toEqual(expect.any([String]))
// })

// test('passes a string without space', () => {
//   expect(addLength('appleban')).toEqual(null)
// })
