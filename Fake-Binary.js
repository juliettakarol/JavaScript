// Given a string of digits, you should replace 
// any digit below 5 with '0' and any digit 5 
// and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x){
let arr = x.split('').map(element => { 
    if (element >= 5) {
        return  element = 1
    }
    return element = 0   
});
return arr.join('')
}

console.log(fakeBin('45385593107843568'))