//给定一个仅包含 0 和 1 的二维二进制矩阵，找出只包含 1 的最大矩形，并返回其面积。 
//
// 示例: 
//
// 输入:
//[
//  ["1","0","1","0","0"],
//  ["1","0","1","1","1"],
//  ["1","1","1","1","1"],
//  ["1","0","0","1","0"]
//]
//输出: 6 
// Related Topics 栈 数组 哈希表 动态规划 
// 👍 616 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
    if (!matrix || !matrix.length || !matrix[0].length) return 0;

    let m = matrix.length;
    let n = matrix[0].length;
    let high = new Array(m).fill(undefined).map(() => {
        return new Array(n).fill(0);
    });
    let maxArea = 0;
    let getMaxArea = (row) => {
        row = [-1, ...row, -1];
        let maxStack = [];
        for (let i = 0; i < row.length; i++) {
            while (row[i] < row[maxStack[maxStack.length - 1]]) {
                let tmp = maxStack.pop();
                maxArea = Math.max(maxArea, row[tmp] * (i - maxStack[maxStack.length - 1] - 1));
            }
            maxStack.push(i);
        }
    };
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let tmp = Number(matrix[i][j]);
            if (i === 0) {
                high[i][j] = tmp;
            } else {
                high[i][j] = tmp ? tmp + high[i - 1][j] : tmp;
            }

        }
        getMaxArea(high[i]);
    }
    return maxArea;
};
//leetcode submit region end(Prohibit modification and deletion)
