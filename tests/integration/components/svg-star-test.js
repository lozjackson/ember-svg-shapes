import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('svg-star', 'Integration | Component | svg star', {
  integration: true
});

test('it has correct class names', function(assert) {
  assert.expect(1);
  this.render(hbs`{{svg-star}}`);
  assert.equal(this.$('.ember-svg-shapes.svg-star').length, 1);
});
