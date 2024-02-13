// Clock shows h hours, m minutes and s 
// seconds after midnight.

// Your task is to write a function which 
// returns the time since midnight in milliseconds.

function past(h, m, s){
    return h*3.6e6 + m*6e4 + s * 1e3
  }
  