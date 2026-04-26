class SqueakyClean {
    static String clean(String identifier) {
        StringBuilder cleanedString = new StringBuilder();
        boolean capitalizeNext = false;

        for (char c : identifier.toCharArray()) {
            // 1. Spaces → underscores
            if (c == ' ') {
                cleanedString.append('_');
                capitalizeNext = false;
                continue;
            }

            // 2. Kebab-case → camelCase
            if (c == '-') {
                capitalizeNext = true;
                continue;
            }

            // 3. Leetspeak replacements
            switch (c) {
                case '4': c = 'a'; break;
                case '3': c = 'e'; break;
                case '0': c = 'o'; break;
                case '1': c = 'l'; break;
                case '7': c = 't'; break;
            }

            // 4. Omit non-letters
            if (!Character.isLetter(c)) {
                continue;
            }

            // Apply camelCase capitalization if needed
            if (capitalizeNext) {
                cleanedString.append(Character.toUpperCase(c));
                capitalizeNext = false;
            } else {
                cleanedString.append(c);
            }
        }

        return cleanedString.toString();
    }

    // // Quick test
    // public static void main(String[] args) {
    //     System.out.println(clean("my   Id"));       // "my___Id"
    //     System.out.println(clean("a-bc"));          // "aBc"
    //     System.out.println(clean("H3ll0 W0rld"));   // "Hello_World"
    //     System.out.println(clean("4 73s7"));        // "a_test"
    //     System.out.println(clean("a$#.b"));         // "ab"
    // }
}
