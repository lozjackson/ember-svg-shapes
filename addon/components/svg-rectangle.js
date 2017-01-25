/**
  @module ember-svg-shapes
*/
import Ember from 'ember';
import SvgMixin from 'ember-svg-shapes/mixins/svg';
import RectMixin from 'ember-svg-shapes/mixins/rect';
import FilterMixin from 'ember-svg-shapes/mixins/filter';
import layout from '../templates/components/svg-rectangle';

const { Component } = Ember;

/**

  # SvgRectangleComponent

  ```
  {{svg-rectangle
    size="number"
    height="number"
    width="number"
    strokeWidth="number"
    rotate="number"
    radiusX="number"
    radiusY="number"
    fill="color"
    filter="filter id"
    class="class names"}}
  ```

  @class SvgRectangleComponent
  @namespace SvgShapes.Components
  @uses SvgShapes.Mixins.SvgMixin
  @uses SvgShapes.Mixins.RectMixin
  @uses SvgShapes.Mixins.FilterMixin
*/
export default Component.extend(SvgMixin, RectMixin, FilterMixin, {

  layout,

  /**
    This is an array of class names to be added to the svg element.

    @property className
    @type {Array}
    @default ['ember-svg-shapes', 'svg-rectangle']
    @private
  */
  classNames: ['ember-svg-shapes', 'svg-rectangle']
});
