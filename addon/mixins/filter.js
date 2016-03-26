/**
  @module ember-svg-shapes
*/
import Ember from 'ember';

/**
  # Filter Mixin

  This mixin should be added to svg shape components.
  @class FilterMixin
  @namespace SvgShapes.Mixins
*/
export default Ember.Mixin.create({

  /**
    ## Filter

    The `id` of the filter.
    @property filter
    @type {String}
  */
  filter: null,

  /**
    @property filterUrl
    @type {String}
    @private
  */
  filterUrl: Ember.computed('filter', function() {
    let filter = this.get('filter');
    if (!filter) {
      return '';
    }
    return `url(${window.location.href.replace(window.location.hash, "")}#${filter})`;
  })
});
