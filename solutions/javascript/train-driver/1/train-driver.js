// @ts-check

export function getListOfWagons(...a) {
  return [...a]
}

export function fixListOfWagons([first, second, ...ids]) {
  return [...ids, first, second]
}

export function correctListOfWagons([locomotiveId, ...ids], missingWagons) {
  return [locomotiveId, ...missingWagons, ...ids]
}

export function extendRouteInformation(information, additional) {
  return {...information, ...additional}
}

export function separateTimeOfArrival({timeOfArrival, ...information}) {
  return [timeOfArrival, {...information}]
}
