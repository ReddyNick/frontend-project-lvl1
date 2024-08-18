import _ from 'lodash';

const constructBrainPrimeQuestions = () => {
  const prompt = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const numQuestions = 3;
  const minNumber = 1;
  const maxNumber = 99;

  const isPrime = (num) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  };

  const questionAnswerPairs = [];
  for (let i = 0; i < numQuestions; i += 1) {
    const num = _.random(minNumber, maxNumber);
    const question = num.toString();
    const answer = isPrime(num) ? 'yes' : 'no';
    questionAnswerPairs.push([question, answer]);
  }

  return [questionAnswerPairs, prompt];
};

export default constructBrainPrimeQuestions;
