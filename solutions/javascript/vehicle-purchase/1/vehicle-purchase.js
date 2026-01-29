// @ts-check

export function needsLicense(kind) {
  return kind == "car" || kind == "truck"
}

export function chooseVehicle(option1, option2) {
  let winner;
  option1 < option2 ? winner=option1 : winner=option2
  return `${winner} is clearly the better choice.`
}

export function calculateResellPrice(originalPrice, age) {
  return age > 10 
    ? originalPrice * 0.5 
    : age >= 3 
    ? originalPrice * 0.7
    : originalPrice * 0.8
}
