import _ from 'lodash';

const constructBrainGcdQuestions = () => {
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

  return [questionAnswerPairs, prompt];
};

export default constructBrainGcdQuestions;
