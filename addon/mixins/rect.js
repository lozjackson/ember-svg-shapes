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
    _height: Ember.computed('height', 'size', function() {
        var height = this.get('height'),
            size = this.get('size');

        Ember.assert('`height` must be a number greater than zero', !isNaN(height) && height > 0);
        Ember.assert('`size` must be a number greater than zero', !isNaN(size) && size > 0);

        return height * size;
    }),

    /**
      This is a computed property.  It sets the width of the rectangle shape based
      on the width of the svg image element and the stroke width.

      @property _width
      @type {Number}
      @readonly
      @private
    */
    _width: Ember.computed('width', 'size', function() {
        var width = this.get('width'),
            size = this.get('size');

        Ember.assert('`width` must be a number greater than zero', !isNaN(width) && width > 0);
        Ember.assert('`size` must be a number greater than zero', !isNaN(size) && size > 0);

        return width * size;
    }),

    /**
      @property left
      @type {Number}
    */
    left: 0,

    /**
      @property top
      @type {Number}
    */
    top: 0
});
