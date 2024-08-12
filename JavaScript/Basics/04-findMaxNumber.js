function findMaxNumber(nums) {
    let maxi = nums[0];
    // for (let num of nums) if (num > maxi) maxi = num;
    for (let i = 0; i < nums.length; i++) 
        if (nums[i] > maxi) 
            maxi = nums[i];
    return maxi;
}

let result = findMaxNumber([2, 1, 9, 16, 10]);
console.log(result);



const maxNumber = (nums) => Math.max(...nums);
result = maxNumber([2, -1, 19, 16, 10]);
console.log(result);
