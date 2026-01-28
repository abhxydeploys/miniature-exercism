// @ts-check
export function canExecuteFastAttack(knightIsAwake) {
  return !knightIsAwake
}

export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return knightIsAwake || prisonerIsAwake || archerIsAwake
}

export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
   return prisonerIsAwake && !archerIsAwake 
}

export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent,
) {
  return (petDogIsPresent && !archerIsAwake) || (!petDogIsPresent && prisonerIsAwake && !knightIsAwake && !archerIsAwake)
}
