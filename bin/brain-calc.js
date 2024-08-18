#!/usr/bin/env node
import runGame from '../src/index.js';
import constructBrainCalcQuestions from '../games/brain-calc.js';

const [questionAnswerPairs, prompt] = constructBrainCalcQuestions();
runGame(questionAnswerPairs, prompt);
