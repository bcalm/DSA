import java.util.ArrayList;
import java.util.List;

public class DiameterTree {

    static class Solution {
        public int diameterOfBinaryTree(TreeNode root) {
            List<Integer> nodes = new ArrayList<>();
            helper(root, nodes);
            return nodes.size();
        }

        private void helper(TreeNode root, List<Integer> values) {
            if(root == null) {
                return;
            }
            values.add(root.val);
            helper(root.left, values);
            helper(root.right, values);
        }
    }

    public static int getAnswer() {
        Solution solution = new Solution();
        TreeNode p = new TreeNode(1);
        TreeNode q = new TreeNode(1);
        return solution.diameterOfBinaryTree(p);
    };
};
