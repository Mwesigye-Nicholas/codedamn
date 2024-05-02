/**
 * moveZeroes - move zeroes to the end of the array
 *
 * @nums: parameter
 *
 * Return: array
 */


function moveZeroes(nums) {
    
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === 0){
            nums.splice(i, 1);
            nums.push(0);
        }
    }
    return nums;
}
console.log(moveZeroes([0,1,0,3,12]))
//Expected output: [ 1, 3, 12, 0, 0 ]
