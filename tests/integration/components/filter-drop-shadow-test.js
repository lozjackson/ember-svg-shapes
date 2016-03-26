import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('filter-drop-shadow', 'Integration | Component | filter drop shadow', {
  integration: true
});

test('it has correct tagName', function(assert) {
  this.render(hbs`{{filter-drop-shadow}}`);
  assert.equal(this.$('filter').length, 1);
});

test('it has correct id', function(assert) {
  this.render(hbs`{{filter-drop-shadow id="drop-shadow"}}`);
  assert.equal(this.$('#drop-shadow').length, 1);
});
