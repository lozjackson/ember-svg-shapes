import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('svg-square', 'Unit | Component | svg square', {
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

test('_height and _width', function(assert) {
  assert.expect(2);
  var component = this.subject();
  component.set('size', 10);
  this.render();
  assert.equal(component.get('_height'), 10);
  assert.equal(component.get('_width'), 10);
});
