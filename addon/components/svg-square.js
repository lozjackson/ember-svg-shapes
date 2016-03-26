/**
  @module ember-svg-shapes
*/
import Ember from 'ember';
import SvgMixin from 'ember-svg-shapes/mixins/svg';
import RectMixin from 'ember-svg-shapes/mixins/rect';
import FilterMixin from 'ember-svg-shapes/mixins/filter';
import layout from '../templates/components/svg-square';



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
export default Ember.Component.extend(SvgMixin,  RectMixin, FilterMixin, {

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
  _height: Ember.computed('size', function() {
    let size = this.get('size');
    Ember.assert('`size` must be a number greater than zero', !isNaN(size) && size > 0);
    return size;
  }),

  /**
    @property _width
    @type {Number}
    @readonly
    @private
  */
  _width: Ember.computed.alias('_height')
});
