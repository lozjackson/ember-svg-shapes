/**
  @module ember-svg-shapes
*/
import Ember from 'ember';
import layout from '../templates/components/filter-drop-shadow';

/**
  # FilterDropShadowComponent

  There are two different ways to apply filters to an SVG element.  You can embed
  the filter within the svg component, or place the filter in a `SvgFiltersComponent`.

  An example embeding the filter in the component:

  ```
  {{#svg-triangle filter="drop-shadow"}}
    {{filter-drop-shadow id="drop-shadow" dx="2" dy="4"}}
  {{/svg-triangle}}
  ```

  An example applying a drop shadow using an `SvgFiltersComponent`:

  ```
  {{#svg-filters}}
    {{filter-drop-shadow id="drop-shadow" dx="2" dy="4"}}
  {{/svg-filters}}
  ```

  ```
  {{svg-triangle filter="drop-shadow"}}
  ```

  In both cases you need to set the `filter` attribute of the SVG shape component
  to the `id` of the filter component.

  @class FilterDropShadowComponent
  @namespace SvgShapes.Components
*/
export default Ember.Component.extend({
  layout,

  /**
    @property tagName
    @type {String}
    @private
    @default 'filter'
  */
  tagName: 'filter',

  /**
    @property stdDeviation
    @type {Number}
  */
  stdDeviation: 3,

  /**
    @property dx
    @type {Number}
  */
  dx: 1,

  /**
    @property dy
    @type {Number}
  */
  dy: 1
});
