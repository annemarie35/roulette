import { pairGenerator, generatePairs, convertGeneratePairsToJson } from './roulette'

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

  describe('when array contains less than 4 peopleName', () => {
    test('should return the given list for 1 peopleName', () => {
      // given
      const cleanPeopleList = ['DGY']

      // when 
      const result = generatePairs(cleanPeopleList)

      // then
      expect(result.length).toEqual(1)
    })

    test('should return the given list for 2 peopleNames', () => {
      // given
      const cleanPeopleList = ['DGY', 'TRD']

      // when 
      const result = generatePairs(cleanPeopleList)

      // then
      expect(result.length).toEqual(2)
    })

    test('should return the given listfor 3 peopleNames', () => {
      // given
      const cleanPeopleList = ['DGY', 'TRD','FGT']

      // when 
      const result = generatePairs(cleanPeopleList)

      // then
      expect(result.length).toEqual(3)
    })
  })
  
  describe('when array contains 4 peopleNames', () => {
    test('should return random pairs of peopleNames', () => {
      // given
      const cleanPeopleList = ['DGY', 'TRD', 'FGT','MMG']

      // when 
      const result = generatePairs(cleanPeopleList)

      // then
      expect(result.length).toEqual(2)
      expect(result[0].length).toEqual(2)
      expect(result[1].length).toEqual(2)
    })
  })
  
  describe('when array contains 5 peopleNames', () => {
    test('should return random a group of peopleNames', () => {
      // given
      const cleanPeopleList = ['DGY', 'TRD', 'FGT','MMG','RTD']

      // when 
      const result = generatePairs(cleanPeopleList)

      // then
      expect(result.length).toEqual(1)
      expect(result[0].length).toEqual(5)
    })
  })

  describe('when array contains 6 peopleNames', () => {
    test('should return random pairs of peopleNames', () => {
      // given
      const cleanPeopleList = ['DGY', 'TRD', 'FGT','MMG','RTD','TGHS']

      // when 
      const result = generatePairs(cleanPeopleList)

      // then
      expect(result.length).toEqual(3)
      expect(result[0].length).toEqual(2)
      expect(result[1].length).toEqual(2)
      expect(result[2].length).toEqual(2)
    })
  })
  
  describe('when array contains 7 peopleNames', () => {
    test('should return random pairs of peopleNames', () => {
      // given
      const cleanPeopleList = ['DGY', 'TRD', 'FGT','MMG','RTD','TGHS','CDT']

      // when 
      const result = generatePairs(cleanPeopleList)

      // then
      expect(result.length).toEqual(2)
      expect(result[0].length).toEqual(4)
      expect(result[1].length).toEqual(3)
    })
  })

  describe('when array contains 8 peopleNames', () => {
    test('should return random pairs of peopleNames', () => {
      // given
      const cleanPeopleList = ['DGY', 'TRD', 'FGT','MMG','RTD','TGHS','CDT','MLK']

      // when 
      const result = generatePairs(cleanPeopleList)

      // then
      expect(result.length).toEqual(2)
      expect(result[0].length).toEqual(4)
      expect(result[1].length).toEqual(4)
    })
  })
  
  describe('when array contains 9 peopleNames', () => {
    test('should return random pairs of peopleNames', () => {
      // given
      const cleanPeopleList = ['DGY', 'TRD', 'FGT','MMG','RTD','TGHS','CDT','MLK','BOSS',]

      // when 
      const result = generatePairs(cleanPeopleList)

      // then
      expect(result.length).toEqual(2)
      expect(result[0].length).toEqual(4)
      expect(result[1].length).toEqual(5)
    })
  })
  
  describe('when array contains 10 peopleNames', () => {
    test('should return random pairs of peopleNames', () => {
      // given
      const cleanPeopleList = ['DGY', 'TRD', 'FGT','MMG','RTD','TGHS','CDT','MLK','BOSS','PKJK']

      // when 
      const result = generatePairs(cleanPeopleList)

      // then
      expect(result.length).toEqual(3)
      expect(result[0].length).toEqual(4)
      expect(result[1].length).toEqual(4)
      expect(result[2].length).toEqual(2)
    })
  })
  
  describe('when array contains 11 peopleNames', () => {
    test('should return random pairs of peopleNames', () => {
      // given
      const cleanPeopleList = ['DGY', 'TRD', 'FGT','MMG','RTD','TGHS','CDT','MLK','BOSS','PKJK','XDC']

      // when 
      const result = generatePairs(cleanPeopleList)

      // then
      expect(result.length).toEqual(3)
      expect(result[0].length).toEqual(4)
      expect(result[1].length).toEqual(4)
      expect(result[2].length).toEqual(3)
    })
  })
  
  describe('when array contains 12 peopleNames', () => {
    test('should return random pairs of peopleNames', () => {
      // given
      const cleanPeopleList = ['DGY', 'TRD', 'FGT','MMG','RTD','TGHS','CDT','MLK','BOSS','PKJK','XDC','NBV']

      // when 
      const result = generatePairs(cleanPeopleList)

      // then
      expect(result.length).toEqual(3)
      expect(result[0].length).toEqual(4)
      expect(result[1].length).toEqual(4)
      expect(result[2].length).toEqual(4)
    })
  })

  describe('when array contains 27 peopleNames', () => {
    test('should return random pairs of peopleNames', () => {
      // given
      const cleanPeopleList = ['DGY', 'TRD', 'FGT','MMG','RTD','TGHS','CDT','MLK','BOSS','PKJK','XDC','NBV','DGY', 'TRD', 'FGT','MMG','RTD','TGHS','CDT','MLK','BOSS','PKJK','XDC','NBV','NBV','JHG','ZDF']

      // when 
      const result = generatePairs(cleanPeopleList)

      // then
      expect(result.length).toEqual(7)
      expect(result[0].length).toEqual(4)
      expect(result[1].length).toEqual(4)
      expect(result[2].length).toEqual(4)
      expect(result[3].length).toEqual(4)
      expect(result[4].length).toEqual(4)
      expect(result[5].length).toEqual(4)
      expect(result[6].length).toEqual(3)
    })
  })

  describe('when array contains 6 peopleNames', () => {
    test('should return random pairs of peopleNames', () => {
      // given
      const cleanPeopleList = ['DGY', 'TRD', 'FGT','MMG','RTD','TGHS']

      // when 
      const result = generatePairs(cleanPeopleList)
      const expected = convertGeneratePairsToJson(result)

      // then
      expect(expected.Groupe1.length).toEqual(2)     
    })
  })

  describe('when array contains 1 peopleNames', () => {
    test('should return random pairs of peopleNames', () => {
      // given
      const cleanPeopleList = ['DGY', 'TRD', 'FGT','MMG','RTD','TGHS','DDDD','XXX','CCC','BBBB','DDD','QQQ','ZZZ','AAA','FFR','WXC','HGF']

      // when 
      const result = generatePairs(cleanPeopleList)
      const expected = convertGeneratePairsToJson(result)

      // then
      expect(expected.Groupe1.length).toEqual(4)     
    })
  })

})
