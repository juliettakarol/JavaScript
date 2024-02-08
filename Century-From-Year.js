function century(year) {
    let num
    if (year%100==0){
        num = year/100
    }
    if (year%100!==0){
        num = Math.trunc(year/100)+1
    }
    return num;
  } 