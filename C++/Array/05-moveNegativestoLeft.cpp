#include <bits/stdc++.h>
using namespace std;

void printArr(vector<int> &arr)
{
    for (int el : arr)
        cout << el << " ";
    cout << endl;
}

// Move all negative elements to end
void moveAllNegativesToRight(vector<int> &arr)
{
    printArr(arr);
    int l = 0, r = arr.size() - 1;
    while (l < r)
    {
        if (arr[l] < 0 && arr[r] > 0)
            swap(arr[l++], arr[r--]);
        else if (arr[l] > 0)
            l++;
        else
            r--;
        printArr(arr);
    }
}

// Move all elements to Right maintain the order
void segregateElementsMaintainingOrder(vector<int> &arr)
{
    vector<int> temp;
    for (auto element : arr)
        if (element >= 0)
            temp.push_back(element);

    for (auto element : arr)
        if (element < 0)
            temp.push_back(element);

    for (int i = 0; i < temp.size(); i++)
        arr[i] = temp[i];
}

// Move all negatives to the front and positives to the back with constant space 
void rearrange(int arr[], int n)
{
    int j = 0;
    for (int i = 0; i < n; i++)
        if (arr[i] < 0)
        {
            if (i != j)
                swap(arr[i], arr[j]);
            j++;
        }
}


int main()
{
    vector<int> arr = {1, -1, 3, 2, -7, -5, 11, 6};
    moveAllNegativesToRight(arr);
    return 0;
}


