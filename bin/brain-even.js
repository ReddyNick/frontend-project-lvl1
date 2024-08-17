#!/usr/bin/env node
import readlineSync from 'readline-sync';
import _ from 'lodash';
import greeting from '../src/cli.js';

const numQuestions = 3;
const minNumber = 0;
const maxNumber = 99;
const randomNumbers = [];
for (let i = 0; i < numQuestions; i += 1) {
  randomNumbers.push(_.random(minNumber, maxNumber));
}

const name = greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let isAllCorrect = true;

// eslint-disable-next-line no-restricted-syntax
for (const number of randomNumbers) {
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

  if (answer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(
      `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
    );
    console.log(`Let's try again, ${name}!`);
    isAllCorrect = false;
    break;
  }
}

if (isAllCorrect === true) {
  console.log(`Congratulations, ${name}!`);
}
