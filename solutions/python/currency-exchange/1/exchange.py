def exchange_money(budget, exchange_rate):
    """Calculate estimated value after exchange."""
    return budget / exchange_rate


def get_change(budget, exchanging_value):
    """Calculate currency left after an exchange."""
    return budget - exchanging_value


def get_value_of_bills(denomination, number_of_bills):
    """Calculate the total value of currency at current denomination."""
    return int(denomination * number_of_bills)


def get_number_of_bills(amount, denomination):
    """Calculate the number of currency units (bills) within the amount."""
    return int(amount // denomination)


def get_leftover_of_bills(amount, denomination):
    """Calculate leftover amount after exchanging into bills."""
    return amount % denomination


def exchangeable_value(budget, exchange_rate, spread, denomination):
    """Calculate the maximum value of the new currency."""
    # Adjust exchange rate with spread
    effective_rate = exchange_rate * (1 + spread / 100)
    # Convert budget to foreign currency
    exchanged_amount = budget / effective_rate
    # Fit into whole bills only
    return int(exchanged_amount // denomination * denomination)
