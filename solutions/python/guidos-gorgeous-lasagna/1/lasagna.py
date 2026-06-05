# Constant for expected bake time
EXPECTED_BAKE_TIME = 40

def bake_time_remaining(elapsed_bake_time):
    """Return remaining bake time.

    Parameters:
        elapsed_bake_time (int): Minutes the lasagna has already baked.

    Returns:
        int: Remaining bake time in minutes.
    """
    return EXPECTED_BAKE_TIME - elapsed_bake_time

def preparation_time_in_minutes(number_of_layers):
    """Return preparation time.

    Parameters:
        number_of_layers (int): Number of lasagna layers.

    Returns:
        int: Total prep time (2 minutes per layer).
    """
    return number_of_layers * 2

def elapsed_time_in_minutes(number_of_layers, elapsed_bake_time):
    """Calculate total elapsed cooking time.

    Parameters:
        number_of_layers (int): Number of lasagna layers.
        elapsed_bake_time (int): Minutes the lasagna has baked.

    Returns:
        int: Total time spent (prep + bake).
    """
    return preparation_time_in_minutes(number_of_layers) + elapsed_bake_time
