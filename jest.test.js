test('common matcher', () => {
  expect(2 + 2).toBe(4)
  // expect(2 + 2).not.toBe(4)
})
test('tobe true or false', () => {
  expect(1).toBeTruthy()
  expect(0).toBeFalsy()
})
test('number',()=>{
  expect(3).toBeGreaterThan(2)
  expect(1).toBeLessThan(2)
})