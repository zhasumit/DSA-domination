#include <bits/stdc++.h>
using namespace std;

int maxSubarraySum(int arr[], int n)
{ // kadane algorithm
    int maxSum = INT_MIN, sum = 0;
    for (int i = 0; i < n; i++)
    {
        sum += arr[i];
        if (sum > maxSum)
            maxSum = sum;
        if (sum < 0)
            sum = 0;
    }
    return maxSum;
}

// Function to find the sum of contiguous subarray with maximum sum.
long long kadanesAlgorithm(vector<int> &arr)
{
    long long maxSum = INT_MIN, sum = 0;
    for (int el : arr)
    {
        sum += el;
        maxSum = max(sum, maxSum);
        if (sum < 0)
            sum = 0;
    }
    return maxSum;
}