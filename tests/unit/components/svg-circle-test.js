import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

const run = Ember.run;

moduleForComponent('svg-circle', 'Unit | Component | svg circle', {
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

test('radius', function(assert) {
  assert.expect(3);
  var component = this.subject();
  component.set('size', 10);
  this.render();
  assert.equal(component.get('radius'), 5);

  run(() => component.set('size', 7));
  assert.equal(component.get('radius'), 3.5);

  run(() => component.set('size', 4));
  assert.equal(component.get('radius'), 2);
});

test('center', function(assert) {
  assert.expect(2);
  var component = this.subject();
  component.set('size', 10);
  this.render();
  assert.equal(component.get('radius'), 5);
  assert.equal(component.get('center'), 5);
});
