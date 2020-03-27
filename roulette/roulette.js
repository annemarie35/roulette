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
  
  let pairs

  if (cleanPeopleList.length % 2 != 0) {
    console.log("You must have an even number of names. You currently have " + cleanPeopleList.length + " names.");
  } else {
      let arr1 = cleanPeopleList.slice()          
         
      const newArray = arr1.sort(function() { return 0.5 - Math.random()}) 
      
      pairs = [[newArray[0],newArray[1]],[newArray[2],newArray[3]]]
      
  }
  console.log(pairs)
  return pairs
}


// if (names.length % 2 != 0) {
//   alert("You must have an even number of names. You currently have " + names.length + " names.");
// } else {
//   var arr1 = names.slice(), // copy array
//       arr2 = names.slice(); // copy array again

//   arr1.sort(function() { return 0.5 - Math.random();}); // shuffle arrays
//   arr2.sort(function() { return 0.5 - Math.random();});

//   while (arr1.length) {
//       var name1 = arr1.pop(), // get the last value of arr1
//           name2 = arr2[0] == name1 ? arr2.pop() : arr2.shift();
//           //        ^^ if the first value is the same as name1, 
//           //           get the last value, otherwise get the first

//       console.log(name1 + ' gets ' + name2);
//   }
// }