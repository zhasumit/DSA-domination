// sort the array without any sorting algo with 0s 1s and 2s
#include <bits/stdc++.h>
using namespace std;

// using the sorting function
void sort012(int a[], int n) { sort(a, a + n); }





// Using single variables to count elements  
void sort012s(int a[], int n)
{
    // using counting 0s, 1s and 2s
    int zeros = 0;
    int ones = 0;
    int twos = 0;
    for (int i = 0; i < n; i++)
        a[i] == 0 ? zeros++ : a[i] == 1 ? ones++ : twos++;
    int i = 0;
    while (zeros--)
        a[i++] = 0;
    while (ones--)
        a[i++] = 1;
    while (twos--)
        a[i++] = 2;
}





// Dutch national flag algorithm 
void sortColors(vector<int> &a)
{
    int zero = 0, one = 0, two = a.size() - 1;
    while (one <= two)
        if (a[one] == 0)
            swap(a[one++], a[zero++]);
        else if (a[one] == 1)
            one++;
        else
            swap(a[one], a[two--]);
}

