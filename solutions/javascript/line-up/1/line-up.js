//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, number) => {
  var numeral;
  if(String(number).endsWith("1") && !String(number).endsWith("11")){
    numeral = `${number}st`
  } else if(String(number).endsWith("2") && !String(number).endsWith("12")){
    numeral = `${number}nd`
  }else if(String(number).endsWith("3") && !String(number).endsWith("13")){
    numeral = `${number}rd`
  } else {
    numeral = `${number}th`
  }
  return `${name}, you are the ${numeral} customer we serve today. Thank you!`
};
