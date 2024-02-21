import java.util.Arrays;

public class MissingNumber {
    static class Solution {
        public int missingNumber(int[] nums) {
            Arrays.sort(nums);
            for (int index = 0; index < nums.length; index++) {
                if (index != nums[index]) {
                    return index;
                }
            }
            return nums.length;
        }
    }

    public static long getAnswer() {
        Solution solution = new Solution();
        int[] numbers = {0, 1, 3};
        return solution.missingNumber(numbers);
    };
};
