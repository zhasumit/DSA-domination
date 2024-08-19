// given N+1 numbers one number is repeated
#include <bits/stdc++.h>
using namespace std;

int findDuplicate(vector<int> &nums)
{ // using maps and count the occurances
    unordered_map<int, int> mp;
    for (auto element : nums)
        mp[element]++;
    for (auto itr : mp)
        if (itr.second > 1)
            return itr.first;
    return -1;
}

int findDuplicateSorting(vector<int> &nums)
{ // using sorting, no extra space ( but modifying the array itself )
    sort(nums.begin(), nums.end());
    for (int i = 0; i < nums.size() - 1; i++)
        if (nums[i] == nums[i + 1])
            return nums[i];
    return -1;
}

// in repeated elements a cycle is formed (find the start of the cycle which is duplicate)
int findDuplicateTortoiseHareMethod(vector<int> &nums)
{
    int slow = 0, fast = 0;
    // slow moves 1x, fast moves 2x
    do
    {
        slow = nums[slow];       // point to the next location
        fast = nums[nums[fast]]; // point to the next to next location
    } while (slow != fast); // at some point they are equal

    // keep slow where it was and move fast, initialise fast and move 1 step
    fast = 0;
    do
    {
        slow = nums[slow];
        fast = nums[fast];
    } while (slow != fast);
    return slow;
}