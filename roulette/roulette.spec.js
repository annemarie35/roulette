import { pairGenerator } from './roulette'

describe('pairGenerator', () => {

  describe('when empty array given', () => {
    test('should return an empty array', () => {
      // given
      const value = []

      // then
      expect(pairGenerator(value)).toEqual([])
    })
  })

  describe('when one value in array', () => {
    test('should return the value', () => {
      // given
      const value = ['ABC']

      // when
      expect(pairGenerator(value)).toEqual(['ABC'])
    })
  })

  describe('when value lenght is not three or four', () => {
    test('should remove the value from the array for one value given', () => {
      // given
      const value = ['A']

      // when
      expect(pairGenerator(value)).toEqual([])
    })

    test('should remove the value from the array for more than one value', () => {
      // given
      const value = ['DGY', 'A', 'FGT']

      // when
      expect(pairGenerator(value)).toEqual(['DGY', 'FGT'])
    })
  })

  describe('when value contains special characters or numbers', () => {
    test('should remove the value from the array for one value given', () => {
      // given
      const value = ['A', 'RTC', 143, '%ŸT', 'TY1', 'RREREZSWs', '1234', 'GKP']

      // when
      expect(pairGenerator(value)).toEqual(['RTC', 'GKP'])
    })
  })
})
