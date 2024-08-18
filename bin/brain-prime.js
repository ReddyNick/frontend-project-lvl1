#!/usr/bin/env node
import runGame from '../src/index.js';
import constructBrainPrimeQuestions from '../games/brain-prime.js';

const [questionAnswerPairs, prompt] = constructBrainPrimeQuestions();
runGame(questionAnswerPairs, prompt);
