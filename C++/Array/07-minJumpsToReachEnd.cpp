// given an array with jumps allowed with index positions, find min jumps to reach end
#include <bits/stdc++.h>
using namespace std;

int minJumps(int arr[], int n)
{
    if (n <= 1) // already at end (no jumps needed)
        return 0;

    if (arr[0] == 0) // cannot take any step
        return -1;

    int maxReach = arr[0];
    int steps = arr[0];
    int jumps = 1;

    for (int i = 1; i < n; i++)
    {
        if (i == n - 1) // reached the end (last index)
            return jumps;

        maxReach = max(maxReach, arr[i] + i);
        steps--;
        if (steps == 0)
        {
            jumps++;
            if (i >= maxReach)
                return -1;
            steps = maxReach - i;
        }
    }

    return -1;
}