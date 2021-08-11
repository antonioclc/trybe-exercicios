function numTrans(n) {

    if(n == null) return -1;
  
    let i = 0;
    let curr = 0;
    let next = 0;
    let result = 0;
    let romans = {
      I: 1,
      IV: 4,
      V: 5,
      IX: 9,
      X: 10,
      XL: 40,
      L: 50,
      XC: 90,
      C: 100,
      CD: 400,
      D: 500,
      CM: 900,
      M: 1000,
    }
  
    while (i < n.length) {
      for (num in romans) {
        if (n[i] === num) {
          curr = romans[num];
        }
        if (n[i+1] === num) {
          next = romans[num];
        }
      }
      if (curr >= next) {
        result += curr;
        i++;
      } else {
        result = result - curr + next;
        i += 2;
      }
    }
  
    return result;
  }
  
  console.log(numTrans('XIV'))