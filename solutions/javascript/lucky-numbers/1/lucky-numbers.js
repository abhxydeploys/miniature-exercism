// @ts-check

export function twoSum(array1, array2) {

  let array1String = "", array2String = "";
  for(let val of String(array1)){
    array1String += val
  }

  for(let val of String(array2)){
    array2String += val
  }

  return Number(array1String.replaceAll(",","")) + Number(array2String.replaceAll(",",""));

  // const toNum = (arr) => Number(arr.join(""));
  // return toNum(array1) + toNum(array2);
}

export function luckyNumber(value) {

  let stringVal= String(value), len = stringVal.length;  
  let reverseVal = ""
  
  for(let i = len; i>=0; i--){
    reverseVal += stringVal.charAt(i)
  }
  return stringVal === reverseVal
  
  
  // const s = String(value);
  // return s === s.split("").reverse().join("");
}

export function errorMessage(input) {
  if (!input?.toString().trim()) return "Required field";
  const n = Number(input);
  return n && Number.isFinite(n) ? "" : "Must be a number besides 0"
}
