/**
  @module ember-svg-shapes
*/
import Component from '@ember/component';
import SvgMixin from 'ember-svg-shapes/mixins/svg';
import RectMixin from 'ember-svg-shapes/mixins/rect';
import FilterMixin from 'ember-svg-shapes/mixins/filter';
import layout from '../templates/components/svg-square';
import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';
import { assert } from '@ember/debug';

/**

  # SvgSquareComponent

  ```
  {{svg-square
    size="number"
    strokeWidth="number"
    rotate="number of degrees"
    radiusX="number"
    radiusY="number"
    fill="color"
    filter="filter id"
    class="class names"}}
  ```

  @class SvgSquareComponent
  @namespace SvgShapes.Components
  @uses SvgShapes.Mixins.SvgMixin
  @uses SvgShapes.Mixins.RectMixin
  @uses SvgShapes.Mixins.FilterMixin
*/
export default Component.extend(SvgMixin,  RectMixin, FilterMixin, {

  layout,

  /**
    This is an array of class names to be added to the svg element.

    @property className
    @type {Array}
    @default ['ember-svg-shapes', 'svg-square']
    @private
  */
  classNames: ['ember-svg-shapes', 'svg-square'],

  /**
    This is a computed property.  It sets the height of the square shape based
    on the size of the svg image element.

    @property _height
    @type {Number}
    @readonly
    @private
  */
  _height: computed('size', function() {
    let size = this.get('size');
    assert('`size` must be a number greater than zero', !isNaN(size) && size > 0);
    return size;
  }),

  /**
    @property _width
    @type {Number}
    @readonly
    @private
  */
  _width: alias('_height')
});
