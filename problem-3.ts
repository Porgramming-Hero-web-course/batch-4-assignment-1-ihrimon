/*-----------Problem-3-----------*/

function countWordOccurrences(sentence: string, word: string): number {
  const stringLower = sentence.toLowerCase();
  const wordLower = word.toLowerCase();
  const specify = " " + wordLower;
  const wordCount = stringLower.split(specify).length - 1;
  return wordCount;
}

console.log(countWordOccurrences("I love typescript", "typescript"));
