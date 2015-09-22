/**
  @module ember-svg-shapes
*/
import Ember from 'ember';
import SvgMixin from 'ember-svg-shapes/mixins/svg';
import RectMixin from 'ember-svg-shapes/mixins/rect';
import layout from '../templates/components/svg-rectangle';

/**
  @class SvgRectangleComponent
  @namespace SvgShapes.Components
  @uses SvgShapes.Mixins.SvgMixin
  @uses SvgShapes.Mixins.RectMixin
*/
export default Ember.Component.extend( SvgMixin, RectMixin, {

    layout: layout,

    /**
      This is an array of class names to be added to the svg element.

      @property className
      @type {Array}
      @default ['ember-svg-shapes', 'svg-rectangle']
      @private
    */
    classNames: ['ember-svg-shapes', 'svg-rectangle'],

    /**
      The height of the svg image.

      @property height
      @type {Number}
      @default 10
    */
    height: 10,

    /**
      The width of the svg image.

      @property width
      @type {Number}
      @default 20
    */
    width: 20,

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
      This is a computed property.  It sets the height and width of the svg element.

      @property style
      @type {String}
      @private
    */
    style: Ember.computed('height', 'width', 'size', function() {

        var size = this.get('size');

        Ember.assert('`size` must be a number greater than zero', !isNaN(size) && size > 0);

        var height = this.get('height') * size,
            width = this.get('width') * size;

        Ember.assert('`height` must be a number greater than zero', !isNaN(height) && height > 0);
        Ember.assert('`width` must be a number greater than zero', !isNaN(width) && width > 0);

        return Ember.String.htmlSafe(`height:${height}px; width:${width}px;`);
    })
});
