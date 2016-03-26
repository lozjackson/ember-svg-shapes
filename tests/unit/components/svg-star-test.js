import { moduleForComponent, test } from 'ember-qunit';
// import Ember from 'ember';

// const run = Ember.run;

moduleForComponent('svg-star', 'Unit | Component | svg star', {
  // needs: [],
  unit: true
});

test('it renders', function(assert) {
  assert.expect(2);
  var component = this.subject();
  assert.equal(component._state, 'preRender');
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('tagName', function(assert) {
  assert.expect(1);
  var component = this.subject();
  this.render();
  assert.equal(component.get('tagName'), 'svg');
});

test('classNames', function(assert) {
  assert.expect(1);
  var component = this.subject();
  this.render();
  assert.deepEqual(component.get('classNames'), ['ember-view', 'ember-svg-shapes', 'svg-star']);
});
