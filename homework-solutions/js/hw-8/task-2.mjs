/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

function countVowelsInWord(word) {
  if(typeof word !== "string") throw new Error("incorrect data")
  let count = 0;
  const vowels = 'aeiouy';
  for (const letter of word.toLowerCase().trim()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  return count;
}

function sortedByVowels(wordsArr = []) {
  return wordsArr.toSorted((a, b) => countVowelsInWord(a) - countVowelsInWord(b));
}

export { sortedByVowels };
