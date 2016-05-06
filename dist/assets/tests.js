define('dummy/tests/acceptance/scroll-to-test', ['exports', 'qunit', 'dummy/tests/helpers/module-for-acceptance'], function (exports, _qunit, _dummyTestsHelpersModuleForAcceptance) {

  (0, _dummyTestsHelpersModuleForAcceptance['default'])('Acceptance | scroll to');

  (0, _qunit.test)('visiting /scroll-to', function (assert) {
    visit('/');

    var $left = undefined;
    var $right = undefined;
    var $body = undefined;

    andThen(function () {

      $left = $('.scrollable-left');
      $right = $('.scrollable-right');
      $body = $('#ember-testing-container');

      assert.equal($left.scrollTop(), 0, 'initial $left  scolltop');
      assert.equal($right.scrollTop(), 0, 'initial $right scolltop');
      // assert.equal($body .scrollTop(), 0, 'initial $body  scolltop');
    });

    andThen(function () {
      click('.button-left-20');
    });

    andThen(function () {
      assert.equal($left.scrollTop(), 696, '$left scrolltop after click on 20');
    });

    andThen(function () {
      click('.button-right-20');
    });

    andThen(function () {
      assert.equal($right.scrollTop(), 696, '$right scrolltop after click on 20');
    });

    // andThen(function() {
    //   click('.button-body-20');
    // });
    //
    // andThen(function() {
    //   assert.equal($body.scrollTop(), 1105, '$body scrolltop after click on 20');
    // });

    andThen(function () {
      click('.button-left-80');
    });

    andThen(function () {
      assert.equal($left.scrollTop(), 2736, '$left scrolltop after click on 20');
    });

    andThen(function () {
      click('.button-right-80');
    });

    andThen(function () {
      assert.equal($right.scrollTop(), 2736, '$right scrolltop after click on 20');
    });

    // andThen(function() {
    //   click('.button-body-80');
    // });
    //
    // andThen(function() {
    //   assert.equal($body.scrollTop(), 1324, '$body scrolltop after click on 20');
    // });
  });
});
define('dummy/tests/acceptance/scroll-to-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - acceptance/scroll-to-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/scroll-to-test.js should pass jshint.');
  });
});
define('dummy/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('dummy/tests/controllers/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass jshint.');
  });
});
define('dummy/tests/helpers/a.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/a.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/a.js should pass jshint.');
  });
});
define('dummy/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('dummy/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('dummy/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'dummy/tests/helpers/start-app', 'dummy/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _dummyTestsHelpersStartApp, _dummyTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _dummyTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _dummyTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('dummy/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('dummy/tests/helpers/plus.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/plus.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/plus.js should pass jshint.');
  });
});
define('dummy/tests/helpers/range.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/range.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/range.js should pass jshint.');
  });
});
define('dummy/tests/helpers/resolver', ['exports', 'dummy/resolver', 'dummy/config/environment'], function (exports, _dummyResolver, _dummyConfigEnvironment) {

  var resolver = _dummyResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _dummyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _dummyConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('dummy/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('dummy/tests/helpers/start-app', ['exports', 'ember', 'dummy/app', 'dummy/config/environment'], function (exports, _ember, _dummyApp, _dummyConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _dummyConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _dummyApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('dummy/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('dummy/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('dummy/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('dummy/tests/test-helper', ['exports', 'dummy/tests/helpers/resolver', 'ember-qunit'], function (exports, _dummyTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_dummyTestsHelpersResolver['default']);
});
define('dummy/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map