// 实现一个 Trie (前缀树)，包含 insert, search, 和 startsWith 这三个操作。
//
// 示例:
//
// Trie trie = new Trie();
//
// trie.insert("apple");
// trie.search("apple");   // 返回 true
// trie.search("app");     // 返回 false
// trie.startsWith("app"); // 返回 true
// trie.insert("app");
// trie.search("app");     // 返回 true
//
// 说明:
//
//
// 你可以假设所有的输入都是由小写字母 a-z 构成的。
// 保证所有输入均为非空字符串。
//
// Related Topics 设计 字典树
// 👍 447 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * Initialize your data structure here.
 */

var Trie = function() {
  this.next = [];
  this.isEnd = false;
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let root = this;
  for (let i = 0; i < word.length; i++) {
    const now = word.charCodeAt(i) - 97;
    if (root.next[now] === undefined) {
      root.next[now] = new Trie();
    }
    root = root.next[now];
  }
  root.isEnd = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let root = this;
  for (let i = 0; i < word.length; i++) {
    const now = word.charCodeAt(i) - 97;
    if (root.next[now] === undefined) {
      return false;
    }
    root = root.next[now];
  }
  return root.isEnd;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let root = this;
  for (let i = 0; i < prefix.length; i++) {
    const now = prefix.charCodeAt(i) - 97;
    if (root.next[now] === undefined) {
      return false;
    } else {
      root = root.next[now];
    }
  }

  return !!root;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// leetcode submit region end(Prohibit modification and deletion)
