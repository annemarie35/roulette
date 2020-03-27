export const pairGenerator = (peopleList) => {
  let cleanPeopleList = []

  peopleList.map((peopleName) => {

      if (checkPeopleNameFormat(peopleName)) {
        cleanPeopleList.push(peopleName)
      }
  })

  return cleanPeopleList
}

const checkPeopleNameFormat = (peopleName) => {
  const re = /^[A-Z]+$/i
  const isValid = re.test(peopleName)
  return isValid && (peopleName.length === 4 || peopleName.length === 3)
}

export const generatePairs = (cleanPeopleList) => {
  
  let peopleNamePairs

  if (cleanPeopleList.length < 4 ) {

    return cleanPeopleList
  
  } 
  else {
            
    const newArray = cleanPeopleList.sort(function() { return 0.5 - Math.random()})   
    peopleNamePairs = generatePairsAlgo(newArray)      
  }

  return peopleNamePairs
}

const generatePairsAlgo = (newArray) => {

  let pairs = []
  const moduloNumberPeopleName = newArray.length % 4

  if(newArray.length === 4) {   
    pairs.push([newArray.pop(),newArray.pop()],[newArray.pop(),newArray.pop()])       
  }
  if(newArray.length === 6) {
    while(newArray.length ) {
      pairs.push([newArray.pop(), newArray.pop()])
    }
  }
  else{   
    while(newArray.length > 3) {
      pairs.push([newArray.pop(), newArray.pop(), newArray.pop(), newArray.pop()])
    }
    if(moduloNumberPeopleName % 4 === 1) {
      pairs[pairs.length - 1 ].push(newArray.pop())
    }
    if(newArray.length % 4 === 2) {
      pairs.push([newArray.pop(), newArray.pop()])
    }
    if(newArray.length % 4 === 3) {
      pairs.push([newArray.pop(), newArray.pop(), newArray.pop()])
    }
  } 

  return pairs
}
