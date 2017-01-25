/**
  @module ember-svg-shapes
*/
import Ember from 'ember';
import layout from '../templates/components/svg-filters';

const { Component } = Ember;

/**
  # SvgFiltersComponent

  This component can be used as a container for filter elements that
  can then be applied to other SVG elements on the page.

  ```
  {{#svg-filters}}
    // ... put filters here
  {{/svg-filters}}
  ```

  An example applying a drop shadow:

  ```
  {{#svg-filters}}
    {{filter-drop-shadow id="drop-shadow" dx="2" dy="4"}}
  {{/svg-filters}}
  ```

  Set the `filter` attribute of the SVG shape component to the `id` of the filter component.

  ```
  {{svg-triangle filter="drop-shadow"}}
  ```

  @class SvgFiltersComponent
  @namespace SvgShapes.Components
*/
export default Component.extend({
  layout,

  /**
    @property tagName
    @type {String}
    @private
    @default 'svg'
  */
  tagName: 'svg',

  /**
    This is an array of class names to be added to the svg element.

    @property className
    @type {Array}
    @default ['ember-svg-shapes', 'svg-filters']
    @private
  */
  classNames: ['ember-svg-shapes', 'svg-filters'],
});
