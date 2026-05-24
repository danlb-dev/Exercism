class ReverseString {
    String reverse(String inputString) {
        String rev = "";
        String[] chars = inputString.split("");
        for(int i = 0; i < chars.length; i++){
            rev = chars[i] + rev;
        }
        return rev;
    }
}