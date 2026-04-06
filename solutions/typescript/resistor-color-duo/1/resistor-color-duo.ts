export function decodedValue(input: string[]): number {
  let colors = [
    "black", 
    "brown", 
    "red",
    "orange", 
    "yellow", 
    "green",
    "blue", 
    "violet", 
    "grey",
    "white"
  ];
  let [first, second] = input
  return Number(`${colors.indexOf(first)}${colors.indexOf(second)}`);
}
