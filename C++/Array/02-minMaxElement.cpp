#include <bits/stdc++.h>
using namespace std;

pair<long long, long long> getMinMax(vector<long long int> arr)
{
    long long maxi = arr[0];
    long long mini = arr[0];
    long long size = arr.size();
    for (int i = 0; i < size; i++){
        if (arr[i] > maxi) maxi = arr[i];
        if (arr[i] < mini) mini = arr[i];
    }
    pair<long long, long long> ans(mini, maxi);
    return ans;
}
