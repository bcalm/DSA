import java.util.Arrays;
import java.util.HashSet;

public class Intersection {

    static class Solution {
        public int[] intersection(int[] nums1, int[] nums2) {
            HashSet<Integer> intersections = new HashSet<>();
            Arrays.sort(nums1);
            for (int num : nums2) {
                int index = Arrays.binarySearch(nums1, num);
                if (index > -1) {
                    intersections.add(num);
                }
            }
            return intersections.stream().mapToInt((num) -> num).toArray();
        }
    }

    public static int[] getAnswer() {
        Solution solution = new Solution();
        int[] nums1 = { 2, 1};
        int[] nums2 = {1, 1};
        return solution.intersection(nums1, nums2);
    }

    ;
};
