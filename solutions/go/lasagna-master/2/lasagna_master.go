package lasagnamaster

// TODO: define the 'PreparationTime()' function
func PreparationTime(layers []string, avgTimePerLayer int) int{
	if avgTimePerLayer == 0 {
		avgTimePerLayer = 2
	}
	return len(layers) * avgTimePerLayer
}
// TODO: define the 'Quantities()' function
func Quantities() int {
	return 0
}

// TODO: define the 'AddSecretIngredient()' function
func AddSecretIngredient() string{
	return "s"
}

// TODO: define the 'ScaleRecipe()' function
func ScaleRecipe() int {
	return 0
}