import readlineSync from 'readline-sync';
import greeting from './cli.js';

const runGame = (questionAnswerPairs, prompt) => {
  const userName = greeting();
  console.log(prompt);

  let isAllCorrect = true;
  // eslint-disable-next-line no-restricted-syntax
  for (const [question, correctAnswer] of questionAnswerPairs) {
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      isAllCorrect = false;
      break;
    }
  }

  if (isAllCorrect === true) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default runGame;
