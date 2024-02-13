public class FirstPalindrome {
    public String firstPalindrome(String[] words) {
        for (String word : words) {
            if (isPalindrome(word)) {
                return word;
            }
        }
        return "";
    }

    private boolean isPalindrome(String word) {
        int wordLength = word.length();
        for (int i = 0; i < (double) (wordLength / 2); i++) {
            if (word.charAt(i) != word.charAt(wordLength - (1 + i))) {
                return false;
            }
        }
        return true;
    }
}