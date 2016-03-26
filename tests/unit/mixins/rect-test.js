import Ember from 'ember';
import RectMixin from 'ember-svg-shapes/mixins/rect';
import { module, test } from 'qunit';

module('Unit | Mixin | rect');

// Replace this with your real tests.
test('it works', function(assert) {
  var RectObject = Ember.Object.extend(RectMixin);
  var subject = RectObject.create();
  assert.ok(subject);
});
