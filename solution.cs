Here is a JavaScript solution for the paint house problem:

```javascript
function minCost(costs) {
    if (costs == null || costs.length == 0) {
        return 0;
    }
    
    for (let i = 1; i < costs.length; i++) {
        costs[i][0] += Math.min(costs[i - 1][1], costs[i - 1][2]);
        costs[i][1] += Math.min(costs[i - 1][0], costs[i - 1][2]);
        costs[i][2] += Math.min(costs[i - 1][0], costs[i - 1][1]);
    }
    
    return Math.min(Math.min(costs[costs.length - 1][0], costs[costs.length - 1][1]), costs[costs.length - 1][2]);
}

console.log(minCost([[17,2,17],[16,16,5],[14,3,19]]));
```

This console application will output the minimum cost to paint all houses such that no two adjacent houses have the same color. The input is a 2D array where costs[i][j] is the cost of painting house i with color j. The output is the minimum cost to paint all houses.