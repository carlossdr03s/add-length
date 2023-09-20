/* eslint-disable no-undef */
const firstNonConsecutive = require('./index')

test('gives two words', () => {
  expect(firstNonConsecutive('apple ban')).toEqual(['apple 5', 'ban 3'])
})

test('passes an empty array', () => {
  expect(firstNonConsecutive('you will win')).toEqual(['you 3', 'will 4', 'win 3'])
})

test('passes a number', () => {
  expect(firstNonConsecutive(2)).toEqual(expect.any([String]))
})

test('passes a string without space', () => {
  expect(firstNonConsecutive('appleban')).toEqual(null)
})
