// Write a function that accepts an integer n 
// and a string s as parameters, and returns a 
// string of s repeated exactly n times.


function repeatStr (n, s) {

    let string = ""
    for(let i = 1; i <= n; i++){
        string += s
    }
    return string;
  }

  console.log(repeatStr(5,"ha "))