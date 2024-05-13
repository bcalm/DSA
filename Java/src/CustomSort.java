import java.util.HashMap;

public class CustomSort {

    static class Solution {
        public String customSortString(String order, String s) {
            String[] orderList = order.split("");
            String[] input = s.split("");
            HashMap<String, Integer> wordCount = new HashMap<>();
            StringBuilder output = new StringBuilder();
            for (String string : input) {
                if(!order.contains(string)){
                    output.append(string);
                    break;
                }
                if (wordCount.containsKey(string)) {
                    wordCount.put(string, wordCount.get(string) + 1);
                } else {
                    wordCount.put(string, 1);
                }
            }
            for (String string : orderList) {
                if (wordCount.containsKey(string)) {
                    output.append(string.repeat(wordCount.get(string)));
                }
            }
            return output.toString();
        }
    }

    public static String getAnswer() {
        Solution solution = new Solution();
        return solution.customSortString("cba", "abcd");
    }

    ;
};
