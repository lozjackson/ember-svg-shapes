import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('svg-triangle', 'Integration | Component | svg triangle', {
  integration: true
});

test('it has correct class names', function(assert) {
  assert.expect(1);
  this.render(hbs`{{svg-triangle}}`);
  assert.equal(this.$('svg.ember-svg-shapes.svg-triangle').length, 1);
});
