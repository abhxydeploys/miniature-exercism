// @ts-check

export function totalBirdCount(birdsPerDay) {
  var count = 0;
  for(let i=0; i<birdsPerDay.length; i++){
    count += birdsPerDay[i]
  }
  return count;
}

// export function birdsInWeek(birdsPerDay, week) {
//   const start = (week - 1) * 7;
//   let count = 0;

//   // Sum up to 7 days, but stop if we run out of array
//   for (let i = 0; i < 7; i++) {
//     const id = start + i;
//     if (id >= birdsPerDay.length) break;
//     count += birdsPerDay[id];
//   }
//   return count;
// }


export function birdsInWeek(birdsPerDay, week) {
  const start = (week - 1) * 7;
  const end = start + 7;

  let sum = 0;
  for (let i = start; i < birdsPerDay.length && i < end; i++) {
    sum += birdsPerDay[i];
  }
  return sum;
}


export function fixBirdCountLog(birdsPerDay) {
  var fixedBirdCountPerDay = [];
  for (let i = 0; i < birdsPerDay.length; i++) {
    if (i % 2 == 0) fixedBirdCountPerDay.push(birdsPerDay[i]++);
    else fixedBirdCountPerDay.push(birdsPerDay[i]);
  }
  return fixedBirdCountPerDay;
}


// export function fixBirdCountLog(birdsPerDay) {
//   for (let i = 0; i < birdsPerDay.length; i = i+ 2) {
//     birdsPerDay[i]++;
//   }
//   return birdsPerDay;
// }
