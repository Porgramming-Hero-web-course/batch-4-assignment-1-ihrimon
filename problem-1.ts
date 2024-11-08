/*-----------Problem-1-----------*/

function sumArray(num: number[]): number {
  return num.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}
const sum = sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//   console.log(sum);
