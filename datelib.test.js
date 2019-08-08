require('./index.js')
test('sanity', () => {
})

test('instantiate', () => {
  const D = new D('01/07/1999')
  expect(D.getFullYear()).toBe(1999)
  expect(D.month()).toBe(0)
  expect(D.date()).toBe(7)
})

test('year', () => {

})

test('month', () => {

})

test('day', () => {

})

test('hours', () => {

})

test('minutes', () => {

})

test('seconds', () => {

})