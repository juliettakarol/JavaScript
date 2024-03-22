// Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

// All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.

// An example:

// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
// The combine function should be a good citizen, so should not mutate the input objects.


function combine(obj1,obj2) {
   
    let newObj = {};
    for(let key in obj1) {   
    if(newObj[key] === 'object' && typeof obj2[key] === 'object') {   
    newObj[key] = {...obj1[key], ...obj2[key]};
    } else { 
    newObj[key] = obj2[key] ?? obj1[key];
    
    }
    }

    return newObj
}

console.log(combine({ a: 5, d: 11, e: 8 }, { a: 1, c: 8 }))


