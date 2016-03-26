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
      @property left
      @type {Number}
      @default 0
    */
    left: 0,

    /**
      @property top
      @type {Number}
      @default 0
    */
    top: 0,

    /**
      The width of the svg image.

      @property width
      @type {Number}
      @default 20
    */
    width: 20,

    /**
      The height of the svg image.

      @property height
      @type {Number}
      @default 10
    */
    height: 10,

    /**
      This value is used to multiply the height and width of the svg element.  The
      value is pixels (`px`).  The default is 1.

      The number can be less than 1, but not less than 0..  You can have a value
      of 0.5, which will multiply the height and with by 0.5 resulting in the
      rectangle being scaled down by half.

      A value of 2, will double its size.  The default value of 1 means that the
      height and width values are not scaled.

      @property size
      @type {Number}
      @default 1
    */
	size: 1,

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
      This is a computed property.  It sets the height of the svg image element
      using the `height` property multiplied by the `size` property.

      @property _height
      @type {Number}
      @readonly
      @private
    */
    _height: Ember.computed('height', 'size', function() {
        var height = this.get('height') * this.get('size');
        Ember.assert('`height` must be a number greater than zero', !isNaN(height) && height > 0);
        return height;
    }),

    /**
      This is a computed property.  It sets the width of the svg image element
      using the `width` property multiplied by the `size` property.

      @property _width
      @type {Number}
      @readonly
      @private
    */
    _width: Ember.computed('width', 'size', function() {
        var width = this.get('width') * this.get('size');
        Ember.assert('`width` must be a number greater than zero', !isNaN(width) && width > 0);
        return width;
    }),

    /**
      This is a computed property.  It sets the height and width of the svg element.

      @property style
      @type {String}
      @private
    */
    style: Ember.computed('_height', '_width', function() {

        var height = this.get('_height'),
            width = this.get('_width');

        Ember.assert('`_height` must be a number greater than zero', !isNaN(height) && height > 0);
        Ember.assert('`_width` must be a number greater than zero', !isNaN(width) && width > 0);

        return Ember.String.htmlSafe(`height:${height}px; width:${width}px;`);
    }),

    viewBox: Ember.computed( '_height', '_width', 'strokeWidth', function() {
        var height = this.get('_height'),
            width = this.get('_width');
        Ember.assert('`_height` must be a number greater than zero', !isNaN(height) && height > 0);
        Ember.assert('`_width` must be a number greater than zero', !isNaN(width) && width > 0);

        var strokeWidth = this.get('strokeWidth'),
            offset = strokeWidth / 2,
            x = offset * -1,
            h = parseFloat(height) + parseFloat(offset * 2),
            w = parseFloat(width) + parseFloat(offset * 2);

        x = 0;
        h = parseFloat(height);
        w = parseFloat(width);

        return `${x} ${x} ${w} ${h}`;
    }),

    /**
      This is a computed property.  It sets the `transform` attribute  of the
      polygon element.

      @property transform
      @type {String}
      @readonly
      @private
    */
    transform: Ember.computed( 'rotate', '_height', '_width', function() {
        var rotate = this.get('rotate'),
            cx = this.get('_width') / 2,
            cy = this.get('_height') / 2;

        if (!rotate || isNaN(rotate)) {
            rotate = 0;
        }

        Ember.assert('`cx` must be a number greater than zero', !isNaN(cx) && cx > 0);
        Ember.assert('`cy` must be a number greater than zero', !isNaN(cy) && cy > 0);

        return `rotate(${rotate}, ${cx}, ${cy})`;
    })
});
