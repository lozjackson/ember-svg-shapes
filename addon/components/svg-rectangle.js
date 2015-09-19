/**
  @module ember-svg-shapes
*/
import Ember from 'ember';
import SvgMixin from 'ember-svg-shapes/mixins/svg';
import layout from '../templates/components/svg-rectangle';

/**
  @class SvgRectangleComponent
  @namespace SvgShapes
  @uses SvgShapes.SvgMixin
*/
export default Ember.Component.extend( SvgMixin, {

    layout: layout,

    /**
      @property className
      @type {Array}
      @default ['svg-rectangle']
      @private
    */
    classNames: ['svg-rectangle'],

    /**
      @property radiusX
      @type {Number}
      @default 0
    */
    radiusX: 0,

    /**
      @property radiusX
      @type {Number}
      @default 0
    */
    radiusY: 0,

    /**
      @property height
      @type {Number}
      @default 10
    */
    height: 10,

    /**
      @property width
      @type {Number}
      @default 10
    */
    width: 10,

    /**
      @property _height
      @type {Number}
      @readonly
      @private
    */
    _height: Ember.computed('height', 'strokeWidth', function() {
        var height = this.get('height'),
            strokeWidth = this.get('strokeWidth');
        return height - strokeWidth;
    }),

    /**
      @property _width
      @type {Number}
      @readonly
      @private
    */
    _width: Ember.computed('width', 'strokeWidth', function() {
        var width = this.get('width'),
            strokeWidth = this.get('strokeWidth');
        return width - strokeWidth;
    }),

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
    top: Ember.computed.alias('left'),

    /**
      This is a computed property.  It sets the height and width of the svg element.
      @property style
      @type {String}
      @private
    */
    style: Ember.computed('height', 'width', function() {
        var height = this.get('height'),
            width = this.get('width');
        return Ember.String.htmlSafe('height:' + height + 'px; width:' + width + 'px;');
    })
});
