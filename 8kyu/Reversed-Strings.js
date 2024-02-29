// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'


function solution(str){
    let string = ''
    for(let i=1; i <= str.length; i++) {
        string += (str.at(-i))
    } 
    return string
}
