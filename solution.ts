Here is a TypeScript solution for the paint house problem:

```typescript
class PaintHouse {
    private costs: number[][];

    constructor(costs: number[][]) {
        this.costs = costs;
    }

    public minCost(): number {
        if (this.costs.length === 0) return 0;

        for (let i = 1; i < this.costs.length; i++) {
            this.costs[i][0] += Math.min(this.costs[i - 1][1], this.costs[i - 1][2]);
            this.costs[i][1] += Math.min(this.costs[i - 1][0], this.costs[i - 1][2]);
            this.costs[i][2] += Math.min(this.costs[i - 1][0], this.costs[i - 1][1]);
        }

        return Math.min(...this.costs[this.costs.length - 1]);
    }
}

let costs = [[17, 2, 17], [16, 16, 5], [14, 3, 19]];
let paintHouse = new PaintHouse(costs);
console.log(paintHouse.minCost());
```

This solution uses a dynamic programming approach to solve the problem. It iterates over the houses, and for each house, it calculates the minimum cost to paint it with each color. The minimum cost to paint a house with a certain color is the cost of painting the house with that color plus the minimum cost to paint the previous house with a color that is not the same as the current color. The minimum cost to paint all the houses is the minimum cost to paint the last house with any color.