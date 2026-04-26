package lasagnamaster

// PreparationTime estimates total preparation time based on number of layers.
// If avgTimePerLayer is 0, default to 2 minutes.
func PreparationTime(layers []string, avgTimePerLayer int) int {
    if avgTimePerLayer == 0 {
        avgTimePerLayer = 2
    }
    return len(layers) * avgTimePerLayer
}

// Quantities calculates the amount of noodles (grams) and sauce (liters) needed.
func Quantities(layers []string) (noodles int, sauce float64) {
    for _, layer := range layers {
        switch layer {
        case "noodles":
            noodles += 50
        case "sauce":
            sauce += 0.2
        }
    }
    return
}

// AddSecretIngredient replaces "?" in myList with the last element of friendsList.
func AddSecretIngredient(friendsList, myList []string) {
    if len(friendsList) > 0 && len(myList) > 0 {
        myList[len(myList)-1] = friendsList[len(friendsList)-1]
    }
}

// ScaleRecipe scales ingredient quantities from 2 portions to desired portions.
func ScaleRecipe(quantities []float64, portions int) []float64 {
    scaled := make([]float64, len(quantities))
    for i, qty := range quantities {
        scaled[i] = qty * float64(portions) / 2.0
    }
    return scaled
}
