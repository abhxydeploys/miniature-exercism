export function decodedResistorValue([band1, band2, band3]: string): string {
  const ColorValues: Record<string, number> = {
    black: 0, brown: 1, red: 2, orange: 3, yellow: 4,
    green: 5, blue: 6, violet: 7, grey: 8, white: 9,
  };
  
  const MetricPrefixes: Record<number, string> = {
    9: "gigaohms",
    6: "megaohms",
    3: "kiloohms",
    0: "ohms",
  };

  let band1Value = ColorValues[band1]
  let band2Value = ColorValues[band2]
  let multiplier = Math.pow(10, ColorValues[band3])
  
  let ohmValue = (band1Value * 10 + band2Value) * multiplier

  const exponent = Math.floor(Math.log10(ohmValue || 1)/3) * 3
  const unit = MetricPrefixes[exponent] || "ohms"
  const normalizedValue = ohmValue / Math.pow(10, exponent)

  return `${normalizedValue} ${unit}`
}
