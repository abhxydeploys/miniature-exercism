// Package weather contains all the function to evaluate city's weather.
package weather

var (
    // CurrentCondition describes the current weather condition of that particular place.
	CurrentCondition string
    // CurrentLocation describes the current city or place where weather condition is being evaluated.
	CurrentLocation  string
)

// Forecast this function just calculates that particular city weather that are being asked.
func Forecast(city, condition string) string {
	CurrentLocation, CurrentCondition = city, condition
	return CurrentLocation + " - current weather condition: " + CurrentCondition
}
