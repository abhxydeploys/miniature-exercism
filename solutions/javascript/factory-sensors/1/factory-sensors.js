// @ts-check

export class ArgumentError extends Error {
  constructor(temperature){
    super(`The temperature is ${temperature} ! Sensor is broken !`);
    this.temperature = "ArgumentError";
    this.name = name;
  }
}

export class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
    this.name = 'OverheatingError';
  }
}

export function checkHumidityLevel(humidityPercentage) {
  if(humidityPercentage > 70){
    throw Error("Temperature exceeded 70%")
  }
}

export function reportOverheating(temperature) {
  if(temperature === null) throw new ArgumentError(temperature)
  if(temperature > 500) throw new OverheatingError(temperature)
  else "Nothing Breaks"
}

export function monitorTheMachine(actions) {
  const {
    check, alertDeadSensor, alertOverheating, shutdown
  } = actions;
  
  try {
    check();
  } catch (error) {
    if (error instanceof ArgumentError) {
      alertDeadSensor();
    } 
    else if (error instanceof OverheatingError) {
      if (error.temperature < 600) {
        alertOverheating();
      } else {
        shutdown();
      }
    } 
    else {
      throw error;
    }
  }
}