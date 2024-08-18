#!/usr/bin/env node
import runGame from '../src/index.js';
import constructBrainProgressionQuestions from '../games/brain-progression.js';

const [questionAnswerPairs, prompt] = constructBrainProgressionQuestions();
runGame(questionAnswerPairs, prompt);
