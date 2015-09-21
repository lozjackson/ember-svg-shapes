/**
  @module ember-svg-shapes
*/
import Ember from 'ember';

/**
  @class PolygonMixin
  @namespace SvgShapes.Mixins
*/
export default Ember.Mixin.create({

    /**
      @property attributeBindings
      @type {Array}
      @default ['style']
      @private
    */
    attributeBindings: ['style', 'viewBox'],

    /**
      This property sets the `points` attribute of the polygon element.
      @property points
      @type {String}
      @readonly
      @private
    */
    points: '',

    /**
      Rotate the shape.

      @property rotate
      @type {Number}
      @default 0
    */
    rotate: 0,

    /**
      This is a computed property.  It sets the `transform` attribute  of the
      polygon element.

      @property transform
      @type {String}
      @readonly
      @private
    */
    transform: Ember.computed( 'rotate', 'size', function() {
        var rotate = this.get('rotate'),
            size = this.get('size'),
            center;

        if (!rotate || isNaN(rotate)) {
            rotate = 0;
        }

        Ember.assert('`size` must be a number greater than zero', !isNaN(size) && size > 0);

        center = size / 2;
        return 'rotate(' + rotate + ', ' + center + ', ' + center + ')';
    }),

    /**
      @property viewBox
      @type {String}
      @readonly
      @private
    */
    viewBox: Ember.computed('size', 'strokeWidth', function() {
        var size = this.get('size'),
            strokeWidth = this.get('strokeWidth');

        Ember.assert('`size` must be a number greater than zero', !isNaN(size) && size > 0);

        if (isNaN(strokeWidth))
        {
            strokeWidth = 0;
        }

        var offset = strokeWidth / 5,
            x = (strokeWidth / 2),
            y = strokeWidth - offset,
            w = parseFloat(size) + parseFloat((strokeWidth*2) - (offset * 2)),
            h = parseFloat(size) + parseFloat((strokeWidth*2) - (offset * 2));

        return '-' + x + ' -' + y + ' ' + w + ' ' + h;
    })
});
