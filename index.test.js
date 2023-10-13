/* eslint-disable no-undef */
const addLength = require('./index')

test('gives two words', () => {
  expect(addLength('apple ban')).toEqual(['apple 5', 'ban 3'])
})
