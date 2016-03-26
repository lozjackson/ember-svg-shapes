import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('svg-rectangle', 'Integration | Component | svg rectangle', {
  integration: true
});

test('it has correct class names', function(assert) {
  assert.expect(1);
  this.render(hbs`{{svg-rectangle}}`);
  assert.equal(this.$('svg.ember-svg-shapes.svg-rectangle').length, 1);
});
