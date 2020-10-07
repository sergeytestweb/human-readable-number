module.exports = function toReadable(number) {
    let numbers = [, "one", "two", "three", "four", "five",
    "six", "seven", "eight", "nine", "ten",
    "eleven", "twelve", "thirteen", "fourteen", "fifteen",
    "sixteen", "seventeen", "eighteen", "nineteen"];
 let dozens = [,,"twenty", "thirty","forty","fifty","sixty","seventy","eighty","ninety"];
let newStr, ost, newOst;
    newStr = number.toString().split('');
    // hvost = (number % 100);
if (number == 0) {
    return "zero"
};

if (number < 20) {
return numbers[number];
}

if (number < 100 && number % 10 === 0) {
  return dozens[newStr[0]];
} else if (number > 20 && number < 100) {
  // newStr = number.toString().split('');
  return dozens[newStr[0]]+' '+numbers[newStr[1]];
}
if (number >= 100 && number < 1000) {
  if (number % 100 === 0) {
  return numbers[newStr[0]]+' '+"hundred";
  }
  if (number > 100 && number < 1000) {
    if (newStr[1] === '0') {
        return numbers[newStr[0]]+' '+"hundred"+" "+numbers[newStr[2]];
    }
    if (newStr[1] === '1') {
      let ost = number % 100;
      return numbers[newStr[0]]+' '+"hundred"+' '+numbers[ost]
    }
    if (newStr[1] !== '1' && newStr[1] !== '0') {
       ost = (number % 100);
       newOst = ost.toString().split('');
      if (ost % 10 === 0) {
        return numbers[newStr[0]]+' '+"hundred"+' '+dozens[newOst[0]]
      } else {
        return numbers[newStr[0]]+' '+"hundred"+' '+dozens[newOst[0]]+' '+numbers[newOst[1]]
        }
    } 
  }
    }
}