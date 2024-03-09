import java.util.Arrays;

public class TownJudge {
    static class Solution {
        public int findJudge(int n, int[][] trust) {
            int[] countTrust = new int[n + 1];

            for (int[] judge : trust) {
                countTrust[judge[0]]--;
                countTrust[judge[1]]++;
            }

            for (int i = 1; i <= n; i++) {
                if (countTrust[i] == n - 1) {
                    return i;
                }
            }
            return -1;
        }
    }

    public static long getAnswer() {
        Solution solution = new Solution();
        int[][] trust = {{1, 3}, {2, 3}};
        return solution.findJudge(3, trust);
    }

    ;
};
