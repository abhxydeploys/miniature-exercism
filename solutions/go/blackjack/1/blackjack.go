package blackjack

// ParseCard returns the integer value of a card following blackjack ruleset.
func ParseCard(card string) int {
	switch card {
        case "ace": 
        	return 11
        case "king", "queen", "jack", "ten": 
        	return 10
    	case "nine": 
        	return 9
        case "eight": 
        	return 8
        case "seven": 
        	return 7
        case "six": 
        	return 6
        case "five": 
        	return 5
        case "four": 
        	return 4
        case "three": 
        	return 3
        case "two": 
        	return 2

    	default: 
        	return 0
    }
}

// FirstTurn returns the decision for the first turn, given two cards of the
// player and one card of the dealer.
func FirstTurn(card1, card2, dealerCard string) string {

//	Get the numberic value of the card
	card1Val := ParseCard(card1)
    card2Val := ParseCard(card2)
	dealerCardVal := ParseCard(dealerCard)
    cardsSum := card1Val + card2Val

// Use switch case
    switch {
        // Rule 1: Pair of ACES
        case card1 == "ace" && card2 == "ace":
        	return "P"

        // Rule 2: BlackJack
        case cardsSum == 21:
        	if dealerCardVal<10 {
                return "W"
            }
        	return "S"
        // Rule 3: Range[17, 20]
        case cardsSum >= 17 && cardsSum <= 20:
        	return "S"

        // Rule 4: Range[12, 16]
        case cardsSum >= 12 && cardsSum <= 16:
        	if(dealerCardVal >= 7) {
                return "H"
            }
        	return "S"

        // Rule 5: Sum less then 11
        case cardsSum <= 11: 
        	return "H"
        
        default: 
        	return "nil"
    }
    
}
