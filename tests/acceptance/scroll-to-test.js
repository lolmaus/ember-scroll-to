import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | scroll to');

test('visiting /scroll-to', function(assert) {
  visit('/');

  let $left;
  let $right;
  let $body ;

  andThen(function() {

    $left  = $('.scrollable-left');
    $right = $('.scrollable-right');
    $body  = $('#ember-testing-container');

    assert.equal($left .scrollTop(), 0, 'initial $left  scolltop');
    assert.equal($right.scrollTop(), 0, 'initial $right scolltop');
    assert.equal($body .scrollTop(), 0, 'initial $body  scolltop');
  });

  andThen(function() {
    click('.button-left-20');
  });

  andThen(function() {
    assert.equal($left.scrollTop(), 696, '$left scrolltop after click on 20');
  });

  andThen(function() {
    click('.button-right-20');
  });

  andThen(function() {
    assert.equal($right.scrollTop(), 696, '$right scrolltop after click on 20');
  });

  andThen(function() {
    click('.button-body-20');
  });

  andThen(function() {
    assert.equal($body.scrollTop(), 1060, '$body scrolltop after click on 20');
  });

  andThen(function() {
    click('.button-left-80');
  });

  andThen(function() {
    assert.equal($left.scrollTop(), 2736, '$left scrolltop after click on 20');
  });

  andThen(function() {
    click('.button-right-80');
  });

  andThen(function() {
    assert.equal($right.scrollTop(), 2736, '$right scrolltop after click on 20');
  });

  andThen(function() {
    click('.button-body-80');
  });

  andThen(function() {
    assert.equal($body.scrollTop(), 1324, '$body scrolltop after click on 20');
  });
});
