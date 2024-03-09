import java.util.Arrays;

public class BitwiseAndRange {
    static class Solution {
        public int rangeBitwiseAnd(int left, int right) {
            while(right > left) {
                right &= (right - 1);
                System.out.println(right);
            }
            return right;
        }
    }

    public static long getAnswer() {
        Solution solution = new Solution();
        return solution.rangeBitwiseAnd(1, 2147483647);
    };
};
