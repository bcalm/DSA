var wordBreak = function(s, wordDict) {
  const dp = Array(s.length + 1);
  dp[0] = true;
  for (let index = 0; index <= s.length; index++) {
    console.log(s[index]);
    for (let j = 0; j < index; j++) {
        const suffix = s.slice(j, index);
        if(wordDict.includes(suffix) && dp[j] === true) {
            dp[index] = true;
            break;
        }
    }
  }
  return dp[s.length]
};

s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
console.log(wordBreak(s, wordDict))