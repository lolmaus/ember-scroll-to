import {A} from '@ember/array'
import Helper from '@ember/component/helper'

export function range ([size]/*, hash*/) {
  return A(Object.keys(Array(size).fill()).map(e => parseInt(e, 10)))
}

export default Helper.helper(range)
