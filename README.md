ember-scroll-to-mk2
===================

[![Travis](https://api.travis-ci.org/lolmaus/ember-scroll-to-mk2.svg?branch=gen-1)](https://travis-ci.org/lolmaus/ember-scroll-to-mk2)
[![npm](https://img.shields.io/npm/v/ember-scroll-to-mk2.svg?maxAge=2592000)](https://www.npmjs.com/package/ember-scroll-to-mk2)
[![Ember Observer Score](https://emberobserver.com/badges/ember-scroll-to-mk2.svg)](https://emberobserver.com/addons/ember-scroll-to-mk2)
![1.13+](https://embadge.io/v1/badge.svg?start=1.13.0)


A link/button component that performs scrolling to given selector.

Current implementation uses jQuery for animated scrolling (animation is optional).

See:
[demo](https://lolmaus.github.io/ember-scroll-to-mk2/),
[API docs](https://lolmaus.github.io/yuidork/#/lolmaus/ember-scroll-to-mk2/gen-1/classes/Component).



Reimplementation of `ember-scroll-to`
-------------------------------------

This project is a reimplementation of [ember-scroll-to](https://github.com/jasonkriss/ember-scroll-to)
by [@jasonkriss](https://github.com/jasonkriss) and
[other contributors](https://github.com/jasonkriss/ember-scroll-to/graphs/contributors).

Differences:

* `ember-scroll-to-mk2` only provides the component, not the service.
* Scrolls to any selector, not just id.
* Allows specifying which container to scroll.
* Optional caching of container and target elements -- disable caching if your app has them disappearing/reappearing.



Installation
------------

    ember install ember-scroll-to-mk2



Usage
-----

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



Arguments
---------

| Argument                     | Type                 | Default  value                         | Description                                                                                  |
|:-----------------------------|:---------------------|:---------------------------------------|:---------------------------------------------------------------------------------------------|
| `label`                      | `undefined`/`String` | `undefined`                            | If no block is provided, this is used as link/button label.                                  |
| `target`                     | `String`             | **\<required>**                        | Selector of the element to scroll to                                                         |
| `scrollable`                 | `String`             | `'html, body'`                         | Selector of the element being scrolled. In `test` env, `'#ember-testing-container'` is used. |
| `duration`                   | `undefined`/`Number` | `undefined`                            | Animation duration in milliseconds. When `undefined`, jQuery's default is used.              |
| `easing`                     | `undefined`/`String` | `undefined`                            | Animation easing name. When `undefined`, jQuery's default is used.                           |
| `offset`                     | `Number`             | `0`                                    | Lets you scroll slightly above or below the target.                                          |
| `cacheTarget`                | `Boolean`            | `true`                                 | Whether to cache the target element.                                                         |
| `cacheScrollable`            | `Boolean`            | `true`                                 | Whether to cache the scrollable element.                                                     |
| `afterScroll`                | `undefined`/Action   | `undefined`                            | Ember Action to invoke every time scrolling animation completes.                             |
| `shouldAccountForScrollable` | `Boolean`            | `false` if `scrollable` is not default | Whether to account for `scollable`'s `offset` and `scolllTop` when calculating `scolllTop`.  |



License
-------

This software is free to use under the MIT license. See the [LICENSE](https://github.com/ember-scroll-to-mk2/blob/gen-1/LICENSE.md) file for license text and copyright information.

Includes fragments of code borrowed from [jasonkriss/ember-scroll-to](https://github.com/jasonkriss/ember-scroll-to/).
