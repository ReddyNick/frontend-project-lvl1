#!/usr/bin/env node
import _ from 'lodash';
import runGame from '../src/index.js';

const prompt = 'Find the greatest common divisor of given numbers.';
const numQuestions = 3;
const minNumber = 0;
const maxNumber = 99;

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const questionAnswerPairs = [];
for (let i = 0; i < numQuestions; i += 1) {
  const a = _.random(minNumber, maxNumber);
  const b = _.random(minNumber, maxNumber);
  const question = `${a} ${b}`;
  const answer = gcd(a, b).toString();
  questionAnswerPairs.push([question, answer]);
}

runGame(questionAnswerPairs, prompt);
