/**
  @module ember-svg-shapes
*/
import Ember from 'ember';

const { computed, Mixin } = Ember;

/**
  # Filter Mixin

  This mixin should be added to svg shape components.

  ## Filter

  Set `filter` to the `id` of a filter element.

  @class FilterMixin
  @namespace SvgShapes.Mixins
*/
export default Mixin.create({

  /**
    ## Filter

    The `id` of the filter to be applied to the svg shape component.

    Set the `id` attribute of the filter component...

    ```
    {{#svg-filters}}
      {{filter-drop-shadow id="drop-shadow" dx="2" dy="4"}}
    {{/svg-filters}}
    ```

    ..then set the `filter` attribute of the SVG shape component to the same value.

    ```
    {{svg-triangle filter="drop-shadow"}}
    ```

    @property filter
    @type {String}
  */
  filter: null,

  /**
    @property filterUrl
    @type {String}
    @private
  */
  filterUrl: computed('filter', function() {
    let filter = this.get('filter');
    if (!filter) {
      return '';
    }
    return `url(${window.location.href.replace(window.location.hash, "")}#${filter})`;
  })
});
