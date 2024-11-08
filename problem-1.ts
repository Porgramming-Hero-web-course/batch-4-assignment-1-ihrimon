/*-----------Problem-1-----------*/

function sumArray(nums: number[]): number {
  return nums.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumArray([1, 2, 3, 4, 5]));
