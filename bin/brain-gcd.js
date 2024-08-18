#!/usr/bin/env node
import runGame from '../src/index.js';
import constructBrainGcdQuestions from '../games/brain-gcd.js';

const [questionAnswerPairs, prompt] = constructBrainGcdQuestions();
runGame(questionAnswerPairs, prompt);
