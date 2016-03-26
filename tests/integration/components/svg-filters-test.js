import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('svg-filters', 'Integration | Component | svg filters', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`
    {{#svg-filters}}
      template block text
    {{/svg-filters}}
  `);
  assert.equal(this.$().text().trim(), 'template block text');
});

test('it has correct tagName and classNames', function(assert) {
  this.render(hbs`{{svg-filters}}`);
  assert.equal(this.$('svg.ember-svg-shapes.svg-filters').length, 1);
});
