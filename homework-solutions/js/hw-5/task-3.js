/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';

let vowelsAndConsonantsResult = '';
let vowels = 'aeiou';
let vowelsInWord = 0;
let consonantsInWord = 0;

for (let i = 0; i < word.length; i++) {
  const regex = /^[A-Za-z]+$/;
  const letter = word[i].toLocaleLowerCase()
  if (regex.test(letter) && vowels.includes(letter)) {
    vowelsInWord++;
  } else if(regex.test(letter) && !vowels.includes(letter)) {
    consonantsInWord++;
  }
}

vowelsAndConsonantsResult = `${word} contains ${vowelsInWord} vowels and ${consonantsInWord} consonants`

export { vowelsAndConsonantsResult };
