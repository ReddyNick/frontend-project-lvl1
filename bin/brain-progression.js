#!/usr/bin/env node
import _ from 'lodash';
import runGame from '../src/index.js';

const prompt = 'What number is missing in the progression?';
const numQuestions = 3;
const [minNumber, maxNumber] = [1, 20];
const [minDelta, maxDelta] = [1, 20];
const [minSeqSize, maxSeqSize] = [5, 12];

const questionAnswerPairs = [];
for (let i = 0; i < numQuestions; i += 1) {
  const start = _.random(minNumber, maxNumber);
  const delta = _.random(minDelta, maxDelta);
  const seqSize = _.random(minSeqSize, maxSeqSize);

  const sequence = [];
  let next = start;
  for (let j = 0; j < seqSize; j += 1) {
    sequence.push(next.toString());
    next += delta;
  }

  const maskIndex = _.random(0, sequence.length - 1);
  const answer = sequence[maskIndex];
  sequence[maskIndex] = '..';
  const question = sequence.join(' ');

  questionAnswerPairs.push([question, answer]);
}

runGame(questionAnswerPairs, prompt);
