#include <bits/stdc++.h>
using namespace std;

// for reversing the array
void reverseArray(int arr[], int start, int end)
{
    while (start < end)
    {
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++, end--;
    }
}

// for vectors
vector<int> reverseSubArray(vector<int> &arr, int l, int r)
{
    while (l < r)
    {
        int temp = arr[l - 1];
        arr[l - 1] = arr[r - 1];
        arr[r - 1] = temp;
        l++, r--;
    }
    return arr;
}

// Reverse array
void recursiveReverseArray(int arr[], int start, int end)
{
    if (start >= end)
        return;

    int temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    recursiveReverseArray(arr, start + 1, end - 1);
}

void printArr(int arr[], int size)
{
    for (int i = 0; i < 5; i++)
        cout << arr[i] << " ";
    cout << endl;
}

int main()
{
    int arr[] = {1, 2, 3, 4, 5};
    recursiveReverseArray(arr, 0, 4);
    printArr(arr, 5);

    // using built in function to reverse the array 
    int size = sizeof(arr) / sizeof(arr[0]);
    reverse(arr, arr + size);
    printArr(arr, 5);
    
    return 0;
}