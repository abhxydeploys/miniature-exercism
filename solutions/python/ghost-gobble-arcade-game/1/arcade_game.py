def eat_ghost(power_pellet_active, touching_ghost):
    """Pac-Man can eat a ghost only if he has a power pellet active and is touching a ghost."""
    return power_pellet_active and touching_ghost


def score(touching_power_pellet, touching_dot):
    """Pac-Man scores if he touches either a power pellet or a dot."""
    return touching_power_pellet or touching_dot


def lose(power_pellet_active, touching_ghost):
    """Pac-Man loses if he touches a ghost without a power pellet active."""
    return touching_ghost and not power_pellet_active


def win(has_eaten_all_dots, power_pellet_active, touching_ghost):
    """Pac-Man wins if all dots are eaten and he has not lost."""
    return has_eaten_all_dots and not lose(power_pellet_active, touching_ghost)
