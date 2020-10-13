import * as statuses from '../constants/statuses';

const createEnum = (object) => {
  for (const argumentsKey in object) {
    if (argumentsKey in object) {
      return object;
    }
    console.error('error');
  }
};

export default createEnum;
