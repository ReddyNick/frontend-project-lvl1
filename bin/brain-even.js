#!/usr/bin/env node
import runGame from '../src/index.js';
import constructBrainEvenQuestions from '../games/brain-even.js';

const [questionAnswerPairs, prompt] = constructBrainEvenQuestions();
runGame(questionAnswerPairs, prompt);
