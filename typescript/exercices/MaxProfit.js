var maxProfit = function (prices) {
    let maxProfit = 0;
    let cheapest = prices[0];

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < cheapest) {
            cheapest = prices[i];
        } else {
            const profit = prices[i] - cheapest;
            
            maxProfit = Math.max(profit, maxProfit);
        }
    }

    return maxProfit;
};

console.log(maxProfit([7,1,5,3,6,4]));