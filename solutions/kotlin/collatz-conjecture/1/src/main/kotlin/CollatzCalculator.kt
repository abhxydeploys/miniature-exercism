object CollatzCalculator {
    fun computeStepCount(start: Int): Int {
        require(start > 0) { "Start must be a positive integer" }

        var steps = 0
        var n = start

        while (n != 1) {
            n = if (n % 2 == 0) {
                n / 2
            } else {
                3 * n + 1
            }
            steps++
        }

        return steps
    }
}
