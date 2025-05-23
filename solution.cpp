```cpp
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int minCost(vector<vector<int>>& costs) {
    if(costs.empty() || costs[0].empty()) return 0;
    vector<vector<int>> dp = costs;
    for(int i = 1; i < dp.size(); i++) {
        dp[i][0] += min(dp[i - 1][1], dp[i - 1][2]);
        dp[i][1] += min(dp[i - 1][0], dp[i - 1][2]);
        dp[i][2] += min(dp[i - 1][0], dp[i - 1][1]);
    }
    return min(min(dp.back()[0], dp.back()[1]), dp.back()[2]);
}

int main() {
    vector<vector<int>> costs = {{17,2,17},{16,16,5},{14,3,19}};
    cout << minCost(costs) << endl;
    return 0;
}
```