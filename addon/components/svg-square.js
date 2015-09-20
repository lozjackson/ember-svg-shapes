/**
  @module ember-svg-shapes
*/
import Ember from 'ember';
import SvgMixin from 'ember-svg-shapes/mixins/svg';
import layout from '../templates/components/svg-square';

/**
  @class SvgSquareComponent
  @namespace SvgShapes
  @uses SvgShapes.SvgMixin
*/
export default Ember.Component.extend( SvgMixin, {

    layout: layout,

    /**
      @property className
      @type {Array}
      @default ['svg-square']
      @private
    */
    classNames: ['svg-square'],

    /**
      @property radiusX
      @type {Number}
      @default 0
    */
    radiusX: 0,

    /**
      @property radiusY
      @type {Number}
      @default 0
    */
    radiusY: 0,

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
    _width: Ember.computed.alias('_height'),

    /**
      @property left
      @type {Number}
      @readonly
      @private
    */
    left: Ember.computed('strokeWidth', function() {
        var strokeWidth = this.get('strokeWidth');
        return strokeWidth / 2;
    }),

    /**
      @property top
      @type {Number}
      @readonly
      @private
    */
    top: Ember.computed.alias('left')
});
