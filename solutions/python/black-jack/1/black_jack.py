def value_of_card(card):
    """Return the scoring value of a card."""
    if card in ['J', 'Q', 'K']:
        return 10
    elif card == 'A':
        return 1
    else:
        return int(card)


def higher_card(card_one, card_two):
    """Return the card with the higher value, or both if equal."""
    val_one = value_of_card(card_one)
    val_two = value_of_card(card_two)

    if val_one > val_two:
        return card_one
    elif val_two > val_one:
        return card_two
    else:
        return card_one, card_two


def value_of_ace(card_one, card_two):
    """Return the best value (1 or 11) for an upcoming ace."""
    total = value_of_card(card_one) + value_of_card(card_two)

    # If either card is already an Ace, the new Ace must be 1
    if card_one == 'A' or card_two == 'A':
        return 1

    # If adding 11 keeps total ≤ 21, use 11; otherwise use 1
    return 11 if total + 11 <= 21 else 1


def is_blackjack(card_one, card_two):
    """Return True if the two-card hand is a blackjack."""
    ten_cards = ['10', 'J', 'Q', 'K']
    return (card_one == 'A' and card_two in ten_cards) or \
           (card_two == 'A' and card_one in ten_cards)


def can_split_pairs(card_one, card_two):
    """Return True if the two cards can be split into pairs."""
    return value_of_card(card_one) == value_of_card(card_two)


def can_double_down(card_one, card_two):
    """Return True if the hand totals 9, 10, or 11."""
    total = value_of_card(card_one) + value_of_card(card_two)
    return total in [9, 10, 11]
