import {A} from '@ember/array'
import Helper from '@ember/component/helper'

export function a (params/*, hash*/) {
  return A(params)
}

export default Helper.helper(a)
