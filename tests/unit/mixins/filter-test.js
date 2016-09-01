import Ember from 'ember';
import FilterMixin from 'ember-svg-shapes/mixins/filter';
import { module, test } from 'qunit';

module('Unit | Mixin | filter');

test('filterUrl', function(assert) {
  let FilterObject = Ember.Object.extend(FilterMixin);

  let subject = FilterObject.create();
  subject.set('filter', 'drop-shadow');
  assert.ok(subject.get('filterUrl').indexOf('#drop-shadow') !== -1);
});

test('filterUrl should return empty string if no filter is set', function(assert) {
  let FilterObject = Ember.Object.extend(FilterMixin);

  let subject = FilterObject.create();
  subject.set('filter', null);
  assert.equal(subject.get('filterUrl'), '');
});
