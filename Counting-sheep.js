// Consider an array/list of sheep where some sheep 
// may be missing from their place. 
// We need a function that counts the number of sheep 
// present in the array (true means present).

function countSheeps(sheep) {
    let summ = 0
    sheep.forEach(element => {
        if (element === true){
            summ += Number(element)
        }
    });
    return summ
  }
  console.log(countSheeps([undefined, true]))