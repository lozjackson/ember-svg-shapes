import Ember from 'ember';
import PolygonMixin from '../../../mixins/polygon';
import { module, test } from 'qunit';

module('Unit | Mixin | polygon');

// Replace this with your real tests.
test('it works', function(assert) {
  var PolygonObject = Ember.Object.extend(PolygonMixin);
  var subject = PolygonObject.create();
  assert.ok(subject);
});
