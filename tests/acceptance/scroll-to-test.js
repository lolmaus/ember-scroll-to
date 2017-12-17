import {test} from 'qunit'
import $ from 'jquery'
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance'

moduleForAcceptance('Acceptance | scroll to')

// QUnit.config.testTimeout = 1000 * 60 * 60

test('visiting /scroll-to', async function (assert) {
  await visit('/')



  const $left  = $('.scrollable-left')
  assert.equal($left .scrollTop(), 0, 'initial $left  scolltop')

  await click('.button-left-20')
  assert.equal($left.scrollTop(), 696, '$left scrolltop after click on 20')

  await click('.button-left-80')
  assert.equal($left.scrollTop(), 2736, '$left scrolltop after click on 80')



  const $right = $('.scrollable-right')
  assert.equal($right.scrollTop(), 0, 'initial $right scolltop')

  await click('.button-right-20')
  assert.equal($right.scrollTop(), 696, '$right scrolltop after click on 20')

  await click('.button-right-80')
  assert.equal($right.scrollTop(), 2416, '$right scrolltop after click on 80')



  const $body  = $('#ember-testing-container')
  assert.equal($body .scrollTop(), 0, 'initial $body  scolltop')

  await click('.button-body-20')
  assert.equal($body.scrollTop(), 749, '$body scrolltop after click on 20')

  await click('.button-body-80')
  assert.equal($body.scrollTop(), 2789, '$body scrolltop after click on 80')

  // await new Promise((resolve) => window.resolve = resolve)
})
