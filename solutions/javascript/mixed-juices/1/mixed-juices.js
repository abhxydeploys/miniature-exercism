// @ts-check

export function timeToMixJuice(name) {
  if (name == "Pure Strawberry Joy") return 0.5
  if (name == "Energizer" || name == "Green Garden") return 1.5
  if (name == "Tropical Island") return 3
  if (name == "All or Nothing") return 5
  return 2.5
}

export function limesToCut(wedgesNeeded, limes) {
  var sum=0, index= 0;
  if(wedgesNeeded === 0) return 0;
  for(let i = 0;i<limes.length; i++){
    if(limes[i]=="small"){
      sum+=6
    }else if(limes[i]=="medium"){
      sum+=8
    }else{
      sum+=10
    }
    index = i + 1
    if (sum>=wedgesNeeded) {
      break;
    }
  }
  return index
}

export function remainingOrders(timeLeft, orders) {
	var dupArr = orders.slice();
	var sum = 0;
	for (let i = 0; i < orders.length; i++) {
		if (orders[i] == 'Pure Strawberry Joy') {
			sum += 0.5;
		}
		else if (orders[i] == 'Energizer' || orders[i] == 'Green Garden') {
			sum += 1.5;
		}
		else if (orders[i] == 'Tropical Island') {
			sum += 3;
		}
		else if (orders[i] == 'All or Nothing') {
			sum += 5;
		} else {
			sum += 2.5;
		}

        dupArr.splice(0, 1);
        
		if (timeLeft <= sum) {
			break;
        }
	}
	return dupArr;
}