/**
  @module ember-svg-shapes
*/
import Ember from 'ember';
import SvgMixin from 'ember-svg-shapes/mixins/svg';
import PolygonMixin from 'ember-svg-shapes/mixins/polygon';
import layout from '../templates/components/svg-star';

/**
  @class SvgStarComponent
  @namespace SvgShapes.Components
  @uses SvgShapes.Mixins.SvgMixin
  @uses SvgShapes.Mixins.PolygonMixin
*/
export default Ember.Component.extend( SvgMixin, PolygonMixin, {

    layout: layout,

    /**
      This value is used to set the height and width of the svg element.  The
      value is pixels (`px`).  The default is 10.

      @property size
      @type {Number}
      @default 10
    */
	size: 10,

    /**
      @property rotate
      @type {Number}
      @default -90
    */
    rotate: -90,

    /**
      The number of points the star has.. 5 would produce a 5-point star.
      @property starPoints
      @type {Number}
      @default 5
    */
    starPoints: 5,

    /**
      This sets the radius of the inner points of the star.
      Use numbers between 0.1 and 1.9  Default 1.

      Numbers above 1 make the star fatter, numbers less than 1 make the star thinner.

      @property innerPoints
      @type {Number}
      @default 1
    */
    innerPoints: 1,

    /**
      This is an array of class names to be added to the svg element.

      @property className
      @type {Array}
      @default ['ember-svg-shapes', 'svg-star']
      @private
    */
    classNames: ['ember-svg-shapes', 'svg-star'],

    /**
      @property points
      @type {String}
      @readonly
      @private
    */
    points: Ember.computed( 'size', 'starPoints', 'innerPoints', function() {

        var points = [], r, x, y, center,
			size = this.get('size'),
            starPoints = this.get('starPoints'),
            innerPoints = this.get('innerPoints');

        Ember.assert('`size` must be a number greater than zero', !isNaN(size) && size > 0);
        Ember.assert('`starPoints` must be a number greater than zero', !isNaN(starPoints) && starPoints > 0);

        center = size / 2;

        if (isNaN(innerPoints) || innerPoints <= 0 || innerPoints >= 2)
        {
            innerPoints = 1;
        }

        var outerRadius = size / 2,
            innerRadius = (size / 5) * innerPoints,
            angle = Math.PI / starPoints;

        for (var i = 0, l = 2 * starPoints; i < l; i++)
        {
           // Use outer or inner radius depending on what iteration we are in.
           r = (i & 1) === 0 ? outerRadius : innerRadius;
           x = center + Math.cos(i * angle) * r;
           y = center + Math.sin(i * angle) * r;
           points.push([x, y].join(','));
        }
        return points.join(' ');
    })
});
