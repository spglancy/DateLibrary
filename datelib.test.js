const customDate = require('./index.js')
const testDate1 = new customDate(1999, 0, 7, 10, 5, 50)
const testDate2 = new customDate(2019, 1, 5, 6, 20, 30)
const testDate3 = new customDate(2025, 2, 10, 2, 6, 12)
test('sanity', () => {
})

test('instantiate', () => {
  expect(testDate1.year).toBe(1999)
  expect(testDate1.month).toBe('January')
  expect(testDate1.day).toBe(7)
})

test('year', () => {
  expect(testDate1.year).toBe(1999)
  expect(testDate2.year).toBe(2019)
  expect(testDate3.year).toBe(2025)
})

test('month', () => {
  expect(testDate1.month).toBe('January')
  expect(testDate2.month).toBe('Feburary')
  expect(testDate3.month).toBe('March')
})

test('day', () => {
  expect(testDate1.day).toBe(7)
  expect(testDate2.day).toBe(5)
  expect(testDate3.day).toBe(10)
})

test('hours', () => {
  expect(testDate1.hours).toBe(11)
  expect(testDate2.hours).toBe(7)
  expect(testDate3.hours).toBe(3)
})

test('minutes', () => {
  expect(testDate1.mins).toBe(6)
  expect(testDate2.mins).toBe(21)
  expect(testDate3.mins).toBe(7)
})

test('seconds', () => {
  expect(testDate1.seconds).toBe(51)
  expect(testDate2.seconds).toBe(31)
  expect(testDate3.seconds).toBe(13)
})

test('format', () => {
  expect(testDate1.format('M/d/Y')).toBe('January/7/1999')
  expect(testDate2.format()).toBe('Feburary/5/2019')
  expect(testDate3.format('Y y M m D d H h I i S s')).toBe("2025  March Mar 10 10 03 3 07 7 13 13")
})

test('when', () => {
  expect(testDate1.when(testDate2)).toBe('20 years ago')
  expect(testDate2.when(testDate3)).toBe('6 years ago')
  expect(testDate3.when(testDate1)).toBe('26 years from now')
})