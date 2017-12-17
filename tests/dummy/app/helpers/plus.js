import {helper} from '@ember/component/helper'

export function plus (params/*, hash*/) {
  return params.reduce((a, b) => a + b)
}

export default helper(plus)
