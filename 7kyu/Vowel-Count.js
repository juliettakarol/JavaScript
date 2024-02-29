// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let numberOF = 0
    for (let j=0; j<str.length; j++){
        if (str[j]==='a' || str[j]==='e' || str[j]==='i' || str[j]==='o' || str[j]==='u'){
            numberOF+=1
        }
    }
    return numberOF;
  }

  console.log(getCount('aaaa'))