// Given an array of integers.

// Return an array, where the first element is the 
// count of positives numbers and the second element 
// is sum of negative numbers. 0 is neither positive 
// nor negative.

// If the input is an empty array or is null,
//  return an empty array.

function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0){
        return []
    }
    let positiveNumber = input.filter((elem)=> elem > 0).length
    let negativeNumber = input.filter((elem)=> elem < 0).reduce((sum,elem) => sum + elem, 0)
    let result = [positiveNumber, negativeNumber]
    return result
  }


  console.log(countPositivesSumNegatives([]))
  