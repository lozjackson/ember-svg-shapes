import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('filter-drop-shadow', 'Unit | Component | filter drop shadow', {
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
  assert.equal(component.get('tagName'), 'filter');
});
