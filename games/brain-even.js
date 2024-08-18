import _ from 'lodash';

const constructBrainEvenQuestions = () => {
  const prompt = 'Answer "yes" if the number is even, otherwise answer "no".';
  const numQuestions = 3;
  const minNumber = 0;
  const maxNumber = 99;

  const randomNumbers = [];
  const answers = [];
  for (let i = 0; i < numQuestions; i += 1) {
    const randNumber = _.random(minNumber, maxNumber);
    const answer = randNumber % 2 === 0 ? 'yes' : 'no';
    randomNumbers.push(randNumber);
    answers.push(answer);
  }

  const questionAnswerPairs = _.zip(randomNumbers, answers);

  return [questionAnswerPairs, prompt];
};

export default constructBrainEvenQuestions;
