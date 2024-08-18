import _ from 'lodash';

const constructBrainCalcQuestions = () => {
  const prompt = 'What is the result of the expression?';
  const numQuestions = 3;
  const minNumber = 0;
  const maxNumber = 99;
  const operations = ['+', '-', '*'];

  const questionAnswerPairs = [];
  for (let i = 0; i < numQuestions; i += 1) {
    let a = _.random(minNumber, maxNumber);
    let b = _.random(minNumber, maxNumber);

    if (b > a) {
      [a, b] = [b, a];
    }

    const operation = operations[_.random(0, operations.length - 1)];

    let result = NaN;
    if (operation === '+') {
      result = a + b;
    } else if (operation === '-') {
      result = a - b;
    } else {
      result = a * b;
    }

    result = result.toString();
    const question = `${a} ${operation} ${b}`;
    questionAnswerPairs.push([question, result]);
  }
  return [questionAnswerPairs, prompt];
};

export default constructBrainCalcQuestions;
