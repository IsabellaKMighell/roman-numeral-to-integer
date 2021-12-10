function romanNumeral(string) {
  // type your code here
  const romanNumerals = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000 }
  let numArr = []
  for(let i=0; i<string.length; i++){
    const num = romanNumerals[string[i]]
    numArr.push(num)
  } //convert letters to numbers

  for(let i=0; i <numArr.length-1; i++){
    if(numArr[i]<numArr[i+1]){
      numArr[i] = numArr[i]*-1
    }
  }

  const total = numArr.reduce((total, num)=> total+num)
  return total
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 1");
  console.log(romanNumeral('I'));

  console.log("");

  console.log("Expecting: 9");
  console.log(romanNumeral('IX'));

  console.log("");

  console.log("Expecting: 402");
  console.log(romanNumeral('CDII'));
}

module.exports = romanNumeral;

// Please add your pseudocode to this file
// And a written explanation of your solution
