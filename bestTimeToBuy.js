// Prompt: Say you have an array for which the ith element is the price of a given stock on day i. If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit. Note that you cannot sell a stock before you buy one.

function maxProfit(prices) {
  let buy = 0
  let sell = 1
  let maxProfit = 0

  while (sell < prices.length) {
    if (prices[sell] < prices[buy]) {
      buy = sell
      sell++
    } else {
      let currProfit = prices[sell] - prices[buy]
      if (currProfit > maxProfit) {
        maxProfit = currProfit
      }
      sell++
    }
  }
  return maxProfit
}

// O(N) time complexity
// O(1) space complexity

console.log(maxProfit([7, 1, 5, 3, 6, 4])) // should return 5
console.log(maxProfit([7, 3, 5, 1, 6, 4])) // should return 5
console.log(maxProfit([7, 3, 10, 1, 6, 4])) // should return 7
