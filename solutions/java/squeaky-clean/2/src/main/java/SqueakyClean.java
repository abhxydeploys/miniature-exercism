class SqueakyClean {
    static String clean(String identifier) {
        StringBuilder cleanedString = new StringBuilder();
        for(char c: identifier.toCharArray()){
            cleanedString.append(c == ' ' ? '_' :c);
        }
        return cleanedString.toString();
    }
}
