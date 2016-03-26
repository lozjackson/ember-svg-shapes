import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('svg-square', 'Integration | Component | svg square', {
  integration: true
});

test('it has correct class names', function(assert) {
  assert.expect(1);
  this.render(hbs`{{svg-square}}`);
  assert.equal(this.$('svg.ember-svg-shapes.svg-square').length, 1);
});
