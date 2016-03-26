import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('svg-circle', 'Integration | Component | svg circle', {
  integration: true
});

test('it has correct class names', function(assert) {
  assert.expect(1);
  this.render(hbs`{{svg-circle}}`);
  assert.equal(this.$('svg.ember-svg-shapes.svg-circle').length, 1);
});
