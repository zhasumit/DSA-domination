// Given k < size of arr => find the kth largest element
#include <bits/stdc++.h>
using namespace std;
int kthSmallest(vector<int> &arr, int k)
{ // nlogK since k elements in maxHeap
    priority_queue<int> maxHeap;
    for (int i : arr)
    {
        maxHeap.push(i);        // push the elements to get max on top
        if (maxHeap.size() > k) // if size is more than k pop elements so we only get kth largest
            maxHeap.pop();
    }
    return maxHeap.top();
}

// we can also sort the array -> get the elements in increasing order prevElement < nextElement
// so kth largest is the k-1th index element
int kthSmallestElement(vector<int> &arr, int k)
{ // nlogn
    sort(arr.begin(), arr.end());
    return arr[k - 1];
}

int kthLargest(vector<int> &arr, int k)
{
    priority_queue<int, vector<int>, greater<int>> minHeap;
    for (int element : arr)
    {
        minHeap.push(element);
        if (minHeap.size() > k)
            minHeap.pop();
    }
    return minHeap.top();
}

// using sort 
int kthLargestElement(vector<int> &arr, int k)
{
    sort(arr.begin(), arr.end());
    int n = arr.size();
    return arr[n - k];
}