/**
  @module ember-svg-shapes
*/
import Ember from 'ember';

/**
  @class RectMixin
  @namespace SvgShapes.Mixins
*/
export default Ember.Mixin.create({

    /**
      This value sets the `rx` attribute of the `rect` element.

      @property radiusX
      @type {Number}
      @default 0
    */
    radiusX: 0,

    /**
      This value sets the `ry` attribute of the `rect` element.

      @property radiusY
      @type {Number}
      @default 0
    */
    radiusY: 0,

    /**
      This is a computed property.  It sets the height of the rectangle shape based
      on the height of the svg image element and the stroke width.

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
      This is a computed property.  It sets the width of the rectangle shape based
      on the width of the svg image element and the stroke width.

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
      This is a computed property.  It sets the left coordinate of the rectangle
      shape based on the stroke width.

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
      This is an alias of `left`.
      
      @property top
      @type {Number}
      @readonly
      @private
    */
    top: Ember.computed.alias('left')
});
