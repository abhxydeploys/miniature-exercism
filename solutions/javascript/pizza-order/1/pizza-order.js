
// export function pizzaPrice(pizza, ...extras) {
//   let price = 0;
//   pizza === "Margherita" ? price = 7 :
//     pizza === "Caprese" ? price = 9 : price = 10
//   extras.forEach((item) => {
//     if(item === 'ExtraSauce'){
//       price += 1
//     } else {
//       price += 2
//     }
//   })
//   return price;
// }

export function pizzaPrice(pizza, ...extras) {
  let basePrice = 
    pizza === "Margherita" ? 7 
    : pizza === "Caprese" ? 9 
    : 10;
  
  function addExtras(index){
    if(index === extras.length){
      return 0
    }
    let extraPrice = extras[index] === "ExtraSauce" ? 1: 2
    return extraPrice + addExtras(index + 1)
  }
  return basePrice + addExtras(0)
}

// export function orderPrice(pizzaOrders) {
//   let total = 0;
//   for (const order of pizzaOrders) {
//     total += pizzaPrice(order.pizza, ...([].concat(order.extras || [])));
//   }
//   return total;
// }

export function orderPrice(pizzaOrders) {
  return pizzaOrders.reduce((total, order) => {
    return total + pizzaPrice(order.pizza, ...([].concat(order.extras || [])));
  }, 0);
}
