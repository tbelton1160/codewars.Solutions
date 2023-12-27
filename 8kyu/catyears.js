/*I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]*/

//solution:
var humanYearsCatYearsDogYears = function(humanYears) {
    // Your code here!
    //create three variables and push them into an array
    let cat = 0
    let dog = 0
    if(humanYears == 1){
      cat += 15
      dog += 15
    return [humanYears,cat,dog];
    } else if(humanYears > 1){ 
      cat += 24 + (4*(humanYears - 2))
      dog += 24 + (5*(humanYears -2))
      return [humanYears,cat,dog]
      
    }
    
  }