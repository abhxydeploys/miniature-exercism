// @ts-check

export function cardTypeCheck(stack, card) {
  let count = 0
  // 🚨 Use .forEach
  stack.forEach((c) => {
    if(c === card) {
      count += 1
    }
  })
  return count
}

export function determineOddEvenCards(stack, type) {
  let count = 0
  // 🚨 Use a `for...of` loop
  if(type==true){
    for(const card of stack){
      if(card % 2 == 0) count += 1
    }
  }
  if(type==false){
    for(const card of stack){
      if(card % 2 != 0) count += 1
    }
  }
  return count;
}
