import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class LeastCommon {

    static class Solution {
        public int getCommon(int[] nums1, int[] nums2) {
            for (int num : nums2) {
                int index = Arrays.binarySearch(nums1, num);
                if (index > -1) {
                    return num;
                }
            }
            return -1;
        }
    }

    public static int getAnswer() {
        Solution solution = new Solution();
        int[] nums1 = {1, 2, 3};
        int[] nums2 = {1, 2};
        return solution.getCommon(nums1, nums2);
    }

    ;
};
