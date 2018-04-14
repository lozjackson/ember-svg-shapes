import EmberObject from '@ember/object';
import SvgMixin from 'ember-svg-shapes/mixins/svg';
import { module, test } from 'qunit';

module('Unit | Mixin | svg');

// Replace this with your real tests.
test('it works', function(assert) {
  var SvgObject = EmberObject.extend(SvgMixin);
  var subject = SvgObject.create();
  assert.ok(subject);
});
