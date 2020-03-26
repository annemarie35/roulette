import { pairGenerator, generatePairs } from './roulette'

describe('pairGenerator', () => {

  describe('when empty array given', () => {
    test('should return an empty array', () => {
      // given
      const peopleName = []

      // then
      expect(pairGenerator(peopleName)).toEqual([])
    })
  })

  describe('when one peopleName in array', () => {
    test('should return the peopleName', () => {
      // given
      const peopleName = ['ABC']

      // when
      expect(pairGenerator(peopleName)).toEqual(['ABC'])
    })
  })

  describe('when peopleName lenght is not three or four', () => {
    test('should remove the peopleName from the array for one peopleName given', () => {
      // given
      const peopleName = ['A']

      // when
      expect(pairGenerator(peopleName)).toEqual([])
    })

    test('should remove the peopleName from the array for more than one peopleName', () => {
      // given
      const peopleList = ['DGY', 'A', 'FGT']

      // when
      expect(pairGenerator(peopleList)).toEqual(['DGY', 'FGT'])
    })
  })

  describe('when peopleName contains special characters or numbers', () => {
    test('should remove the peopleName from the array for one peopleName given', () => {
      // given
      const peopleList = ['A', 'RTC', 143, '%ŸT', 'TY1', 'RREREZSWs', '1234', 'GKP']

      // when
      expect(pairGenerator(peopleList)).toEqual(['RTC', 'GKP'])
    })
  })

  describe('when array contains most than 4 peopleNames', ()=>{
    test('should return random pairs of peopleNames', ()=>{
      // given
      const cleanPeopleList = ['DGY', 'TRD', 'FGT','MMG']

      // when 
      const result = generatePairs(cleanPeopleList)

      // then
      expect(result.length).toEqual(2)

    })
  })

})
