/*-----------Problem-2-----------*/

function removeDuplicates(nums: number[]): number[] {
  const newArray = nums.filter((item, index) => nums.indexOf(item) === index);
  return newArray;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
