export const pairGenerator = (peopleList) => {
  let newPeopleList = []

  peopleList.map((peopleName) => {

      if (checkPeopleNameFormat(peopleName)) {
        newPeopleList.push(peopleName)
      }
  })

  return newPeopleList
}

const checkPeopleNameFormat = (peopleName) => {
  const re = /^[A-Z]+$/i
  const isValid = re.test(peopleName)
  return isValid && (peopleName.length === 4 || peopleName.length === 3)
}



