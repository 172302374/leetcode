// N 对情侣坐在连续排列的 2N 个座位上，想要牵到对方的手。 计算最少交换座位的次数，以便每对情侣可以并肩坐在一起。 一次交换可选择任意两人，让他们站起来交
// 换座位。
//
// 人和座位用 0 到 2N-1 的整数表示，情侣们按顺序编号，第一对是 (0, 1)，第二对是 (2, 3)，以此类推，最后一对是 (2N-2, 2N-1)
// 。
//
// 这些情侣的初始座位 row[i] 是由最初始坐在第 i 个座位上的人决定的。
//
// 示例 1:
//
//
// 输入: row = [0, 2, 1, 3]
// 输出: 1
// 解释: 我们只需要交换row[1]和row[2]的位置即可。
//
//
// 示例 2:
//
//
// 输入: row = [3, 2, 0, 1]
// 输出: 0
// 解释: 无需交换座位，所有的情侣都已经可以手牵手了。
//
//
// 说明:
//
//
// len(row) 是偶数且数值在 [4, 60]范围内。
// 可以保证row 是序列 0...len(row)-1 的一个全排列。
//
// Related Topics 贪心算法 并查集 图
// 👍 188 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} row
 * @return {number}
 */
var minSwapsCouples = function(row) {
  const len = row.length;
  const n = len / 2;
  const uf = new UnionFind(n);
  for (let i = 0; i < len; i += 2) {
    uf.union(row[i] >> 1, row[i + 1] >> 1);
  }
  return n - uf.count;
};
class UnionFind {
  constructor(n) {
    this.fa = new Array(n).fill(0).map((value, index) => index);
    this.size = new Array(n).fill(1);
    this.count = n;
  }
  union(u, v) {
    let x = this.find(u);
    let y = this.find(v);
    if (x < y) {
      [x, y] = [y, x];
    }
    if (x === y) {
      return;
    }
    this.fa[y] = x;
    this.size[y] += this.size[x];
    this.count--;
  }
  find(index) {
    if (this.fa[index] !== index) {
      this.fa[index] = this.find(this.fa[index]);
    }
    return this.fa[index];
  }
}
// leetcode submit region end(Prohibit modification and deletion)
