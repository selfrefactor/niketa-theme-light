import { getGradientAnt } from './getGradient'

test('get gradient', () => {
  const expected = ["#fafafa", "#cecece", "#a2a2a2", "#767676", "#4a4a4a"]
  
  expect(
    getGradientAnt('#fafafa', '#4a4a4a')
  ).toEqual(expected)
})

