import Ember from 'ember';

const {
  A,
  Helper
} = Ember;

export function range([size]/*, hash*/) {
  return A(Object.keys(Array(size).fill()).map(e => parseInt(e, 10)));
}

export default Helper.helper(range);
