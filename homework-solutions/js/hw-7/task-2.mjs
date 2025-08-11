/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (typeof word !== 'string') return false;
  return word.trim().toLowerCase() === word.trim().toLowerCase().split('').toReversed().join('');
}

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  if (typeof sentence !== 'string' || !sentence) {
    return [];
  }
  const resultArray = [];
  const words = sentence.split(' ');

  let letterLength = 0;
  for (const word of words) {
    if (word.length > letterLength) {
      letterLength = word.length;
    }
  }

  for (const word of words) {
    if (word.length === letterLength) {
      resultArray.push(word);
    }
  }
  return resultArray;
}

export { isPalindrom, findLongestWords };
