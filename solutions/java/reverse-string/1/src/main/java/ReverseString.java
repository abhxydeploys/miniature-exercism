class ReverseString {

    String reverse(String inputString) {
        String rev = "";
        for (int i = inputString.length() - 1; i >= 0; i--) {
            rev = rev + inputString.charAt(i);
        }
        return rev;
    }
  
}
