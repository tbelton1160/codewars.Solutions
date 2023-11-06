// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.

//My solutions, the second solution was made three months before the first
//First Solution
function solution(number){
    let suum = 0
    for(i = 0; i<number; i++){
      i % 3 == 0 || i % 5 == 0 ? suum += i: suum += 0
    }
    return suum
  }

//Second Solution
  function solution(number) {
    //Take a number
    
    //find out if the number is divisible by 3
    let suMM = 0
    if (number > 0) {
      for (i = 0; i < number; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
          suMM += i;
        } else if (i % 3 === 0) {
          suMM += i
        } else if (i % 5 === 0) {
          suMM += i
        }
      }     
      } else if (number % 5 === 0) {
          for (i = 0; i < number; i++) {
            if (i % 5 === 0 && i % 3 === 0) {
                suMM +=i
              } else if(i % 5 === 0) {
                suMM +=i
              } else if(i % 3 === 0) {
                suMM += i
              }
            }
        } else if (number % 3 === 0) {
          for (i = 0; i < number; i++) { 
            if (i % 3 === 0 && i % 5 === 0) {
                  suMM +=i 
              } else if (i % 3 === 0) {
                suMM += i
              } else if (i % 5 === 0) {
                suMM += i
              }
            }
        } else if (number < 0) {
          return 0
        }
      
    //find a way to get all the multiples
      //find out if the number is divisibile by 5
  
    return(suMM)
    //find out if the number is divisible by both three and 5
  }
  
  
  