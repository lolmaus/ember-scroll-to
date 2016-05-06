import Ember from 'ember';
import ENV from 'ember-get-config';

const {
  $,
  Component,
  computed,
  on,
  run,
} = Ember;

import layout from 'ember-scroll-to-mk2/templates/components/scroll-to';


/**
A link/button component that performs scrolling to given selector.

Current implementation uses jQuery for animated scrolling (animation is optional).



## Usage

Inline form:

```hbs
{{scroll-to
  target = "#foo"
  label  = "Scroll to #foo"
}}
```

Block form:

```hbs
{{#scroll-to
  target = "#foo"
}}
  <strong>Scroll to #foo"</strong>
{{/scroll-to}}
```



## Arguments

| Argument          | Type                 | Default  value  | Description                                                                                  |
|:------------------|:---------------------|:----------------|:---------------------------------------------------------------------------------------------|
| `label`           | `undefined`/`String` | `undefined`     | If no block is provided, this is used as link/button label.                                  |
| `target`          | `String`             | **\<required>** | Selector of the element to scroll to                                                         |
| `scrollable`      | `String`             | `'html, body'`  | Selector of the element being scrolled. In `test` env, `'#ember-testing-container'` is used. |
| `duration`        | `undefined`/`Number` | `undefined`     | Animation duration in milliseconds. When `undefined`, jQuery's default is used.              |
| `easing`          | `undefined`/`String` | `undefined`     | Animation easing name. When `undefined`, jQuery's default is used.                           |
| `offset`          | `Number`             | `0`             | Lets you scroll slightly above or below the target.                                          |
| `cacheTarget`     | `Boolean`            | `true`          | Whether to cache the target element.                                                         |
| `cacheScrollable` | `Boolean`            | `true`          | Whether to cache the scrollable element.                                                     |
| `afterScroll`     | `undefined`/Action   | `undefined`     | Ember Action to invoke every time scrolling animation completes.                             |



@class Component
@extends Ember.Component
*/

export default Component.extend({


  // ----- Arguments -----

  /**
   * Selector of the element to scroll to.
   *
   * @property target
   * @type String
   * @required
   **/
  target: null,



  /**
   * Selector of the element being scrolled. In `test` env, `'#ember-testing-container'` is used.
   *
   * @property scrollable
   * @type String
   * @default 'html, body'
   **/
  scrollable: computed(
    () =>
      ENV.environment === 'test'
        ? '#ember-testing-container'
        : 'html, body'
  ),



  /**
   * Animation duration in milliseconds. When `null`, jQuery's default is used.
   *
   * @property duration
   * @type undefined|Number
   * @default undefined
   **/
  duration: undefined,



  /**
   * Animation easing name. When `undefined`, jQuery's default is used.
   *
   * @property easing
   * @type undefined|String
   * @default undefined
   **/
  easing: undefined,



  /**
   * Lets you scroll slightly above or below the target.
   *
   * @property offset
   * @type Number
   * @default 0
   **/
  offset: 0,



  /**
   * Whether to cache the scrollable element.
   *
   * @property cacheScrollable
   * @type Boolean
   * @default true
   **/
  cacheScrollable: true,



  /**
   * Whether to cache the target element.
   *
   * @property cacheTarget
   * @type Boolean
   * @default true
   **/
  cacheTarget: true,



  /**
   * Ember Action to invoke every time scrolling animation completes.
   *
   * @property afterScroll
   * @type undefined|Action
   * @default undefined
   **/
  afterScroll: undefined,




  // ----- Overridden properties -----
  /**
   * @property attributeBindings
   * @type {Array}
   **/
  attributeBindings: ['href'],


  /**
   * @property classNames
   * @type {Array}
   **/
  classNames: ['scrollTo'],


  /**
   * Exists when `tagName` is `'a'`.
   *
   * @property href
   * @type Ember Template
   **/
  href: computed('tagName', function () {
    return this.get('tagName') === 'a'
      ? ''
      : null;
  }),

  /**
   * @property layout
   * @type {Ember Template}
   **/
  layout,

  /**
   * @property tagName
   * @type {String}
   **/
  tagName: 'a',






  // ----- Computed properties -----

  /**
   * Cached jQuery collection containing scrollable element.
   *
   * @property $scrollable
   * @type jQuery Collection
   * @final
   **/
  $scrollable: computed('scrollable', function () {
    return this._get$('scrollable');
  }),



  /**
   * Cached jQuery collection containing $target element.
   *
   * @property $scrollable
   * @type jQuery Collection
   * @final
   **/
  $target: computed('target', function () {
    return this._get$('target');
  }),


  // ----- Events -----
  /**
   * Calls `_scrollVertical()` on `click`.
   *
   * @method _scrollVerticalOnClick
   * @on click
   * @private
   **/
  _scrollVerticalOnClick: on('click', function(event) {
    event.stopPropagation();
    event.preventDefault();

    this._scrollVertical();
  }),



  // ----- Methods -----

  /**
   * Returns a jQuery collection for a selector stored in given property.
   *
   * @method _get$
   * @private
   * @param propertyName {String} Name of property containing selector string.
   * @returns {jQuery Collection}
   **/
  _get$(propertyName) {
    const selector = this.get(propertyName);
    return $(selector);
  },


  /**
   * Returns a jQuery collection for the scrollable element, either from CP or
   * fresh one, .depending on `cacheScrollable` setting.
   *
   * @method _get$scrollableCached
   * @private
   * @returns {jQuery Collection}
   **/
  _get$scrollableCached () {
    return this.get('cacheScrollable')
      ? this.get('$scrollable')
      : this._get$('scrollable');
  },



  /**
   * Returns a jQuery collection for the target element, either from CP or
   * fresh one, .depending on `cacheScrollable` setting.
   *
   * @method _get$targetCached
   * @private
   * @returns {jQuery Collection}
   **/
  _get$targetCached () {
    return this.get('cacheTarget')
      ? this.get('$target')
      : this._get$('target');
  },



  /**
   * Returns the vertical coord of target element within the scrollable element,
   * suitable for `$().scrollTop()`.
   *
   * Accepts params in object form.
   *
   * @method _getVerticalCoord
   * @private
   * @param $scrollable {jQuery Collection} Optional
   * @param $target     {jQuery Collection} Optional
   * @returns {Number} Vertical coord in pixels
   **/
  _getVerticalCoord ({$scrollable, $target}) {
    $scrollable = $scrollable || this._get$scrollableCached();
    $target    = $target    || this._get$targetCached();

    const scrollableOffset    = $scrollable.offset().top;
    const scrollableScrollTop = $scrollable.scrollTop();
    const elementOffset       = $target.offset().top;

    const verticalCoord =
      elementOffset
      - scrollableOffset
      + scrollableScrollTop
      + this.get('offset');

    return verticalCoord;
  },



  /**
   * Scrolls the scrollable element to the target element.
   *
   * @method _scrollVertical
   * @private
   **/
  _scrollVertical () {
    const $scrollable = this._get$scrollableCached();
    const scrollTop   = this._getVerticalCoord({$scrollable});
    const duration    = ENV.environment === 'test' ? 0 : this.get('duration');

    $scrollable.animate(
      {scrollTop},
      duration,
      this.get('easing'),
      () => run(this, this.sendAction, 'afterScroll')
    );
  },
});
