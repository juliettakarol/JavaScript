// Convert number to reversed array of digits
// Given a random non-negative number, you have to 
// return the digits of this number within an array in reverse order.

function digitize(n) {
    let arr = []
    let nstring = String(n)
    for (i=0; i<nstring.length; i++){
        arr.push(+nstring[i])
    }
    return arr.reverse()
  }

  console.log(digitize(12345))


  
  // let n = "12345"
  // let arr = []

  // for (i=0; i<n.length; i++){
  //   arr.push(n[i])
  // }
  // console.log(arr.reverse())

