/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(remainingTime){
  if(remainingTime === 0) return "Lasagna is done."
  if(remainingTime) return "Not done, please wait."
  return "You forgot to set the timer."
}

export function preparationTime(layers, timeInMinutes = 2){
  return layers.length * timeInMinutes
}

export function quantities(items){
  let noodleQty = 0, sauceQty = 0;

  for(let item of items) {
      if(item === "sauce") sauceQty += 0.2
      if(item === "noodles") noodleQty += 50
  }

  return {noodles: noodleQty, sauce: sauceQty}
}

export function addSecretIngredient(friendList, myList){
  const [lastItem] = friendList.slice(-1)
  myList.push(lastItem)
}

export function scaleRecipe(recipeItems, portionToCook = 1){
  let scaledQty = {}
   for(const [key, value] of Object.entries(recipeItems)){
     scaledQty[key] = (value/2)*portionToCook
   }
  return scaledQty
}