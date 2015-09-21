/**
  @module ember-svg-shapes
*/
import Ember from 'ember';
import SvgMixin from 'ember-svg-shapes/mixins/svg';
import RectMixin from 'ember-svg-shapes/mixins/rect';
import layout from '../templates/components/svg-square';

/**
  @class SvgSquareComponent
  @namespace SvgShapes.Components
  @uses SvgShapes.Mixins.SvgMixin
  @uses SvgShapes.Mixins.RectMixin
*/
export default Ember.Component.extend( SvgMixin,  RectMixin, {

    layout: layout,

    /**
      This is an array of class names to be added to the svg element.

      @property className
      @type {Array}
      @default ['ember-svg-shapes', 'svg-square']
      @private
    */
    classNames: ['ember-svg-shapes', 'svg-square'],

    /**
      @property size
      @type {Number}
      @default 10
    */
    size: 10,

    /**
      @property _height
      @type {Number}
      @readonly
      @private
    */
    _height: Ember.computed('size', 'strokeWidth', function() {
        var size= this.get('size'),
            strokeWidth = this.get('strokeWidth');
        return size - strokeWidth;
    }),

    /**
      @property _width
      @type {Number}
      @readonly
      @private
    */
    _width: Ember.computed.alias('_height')
});
