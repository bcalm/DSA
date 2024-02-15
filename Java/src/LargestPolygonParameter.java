import java.util.Arrays;

public class LargestPolygonParameter {
    static class Solution {
        public long largestPerimeter(int[] nums) {
            Arrays.sort(nums);
            long sum = 0;
            for (int num : nums) {
                sum += num;
            }
            for (int i = nums.length - 1; i >= 2; i--) {
                sum -= nums[i];
                if (sum > nums[i]) {
                    return sum + nums[i];
                }
            }
            return -1;
        }
    }

    public static long getAnswer() {
        Solution solution = new Solution();
        int[] numbers = {1, 12, 1, 2, 5, 50, 3};
        return solution.largestPerimeter(numbers);
    }

    ;
};
