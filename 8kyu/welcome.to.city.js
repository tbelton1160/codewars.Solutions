//Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

//solution
function sayHello( name, city, state ) {
    let welcomeToCity = [name, city, state]
    //the values in the name array need to be joined together
    let firstAndLastName = ''
    welcomeToCity[0].forEach((element) => firstAndLastName += ' '+element)
    let pop = (`Hello,${firstAndLastName}! Welcome to ${welcomeToCity[1]}, ${welcomeToCity[2]}!`)
  console.log(pop)
    return pop
  }