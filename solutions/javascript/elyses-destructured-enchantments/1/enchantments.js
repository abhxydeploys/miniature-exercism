/// <reference path="./global.d.ts" />

export function getFirstCard(deck) {
  var [firstCard, , , , ] = deck
  return firstCard
}

export function getSecondCard(deck) {
  var [, secondCard, , , ] = deck
  return secondCard
}

export function swapTwoCards(deck) {
  var [firstCard, secondCard, , , ] = deck
  return [secondCard, firstCard]
}

export function shiftThreeCardsAround(deck) {
  var [firstCard, secondCard, thirdCard, , ] = deck
  return [secondCard, thirdCard, firstCard]
}

export function pickNamedPile({chosen}) {
  return chosen
}

export function swapNamedPile({ chosen, disregarded }) {
  return {disregarded: chosen, chosen: disregarded};
}
