object Bob {
    fun hey(input: String): String {
        val message = input.trim()
        if (message.isEmpty()) {
            return "Fine. Be that way!"
        }
        val isQuestion = message.endsWith("?")
        val hasLetters = message.any { it.isLetter() }
        val isYelling = hasLetters && message.filter { it.isLetter() }
            .all { it.isUpperCase() }

        return when {
            isYelling && isQuestion -> "Calm down, I know what I'm doing!"
            isYelling -> "Whoa, chill out!"
            isQuestion -> "Sure."
            else -> "Whatever."
        }
    }
}
