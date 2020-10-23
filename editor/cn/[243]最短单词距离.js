//给定一个单词列表和两个单词 word1 和 word2，返回列表中这两个单词之间的最短距离。 
//
// 示例: 
//假设 words = ["practice", "makes", "perfect", "coding", "makes"] 
//
// 输入: word1 = “coding”, word2 = “practice”
//输出: 3
// 
//
// 输入: word1 = "makes", word2 = "coding"
//输出: 1
// 
//
// 注意: 
//你可以假设 word1 不等于 word2, 并且 word1 和 word2 都在列表里。 
// Related Topics 数组 
// 👍 37 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function (words, word1, word2) {
    let word1_index = -1, word2_index = -1;
    let dis = Infinity;
    for (let i = 0; i < words.length; i++) {
        if (words[i] === word1) {
            word1_index = i;
        }
        if (words[i] === word2) {
            word2_index = i;
        }
        if (word1_index !== -1 && word2_index !== -1) {
            dis = Math.min(dis, Math.abs(word2_index - word1_index));
        }
    }
    return dis;
};
//leetcode submit region end(Prohibit modification and deletion)
