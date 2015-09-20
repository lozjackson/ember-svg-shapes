/**
  @module ember-svg-shapes
*/
import Ember from 'ember';
import SvgMixin from 'ember-svg-shapes/mixins/svg';
import PolygonMixin from 'ember-svg-shapes/mixins/polygon';
import layout from '../templates/components/svg-triangle';

/**
  @class SvgTriangleComponent
  @namespace SvgShapes.Components
  @uses SvgShapes.Mixins.SvgMixin
  @uses SvgShapes.Mixins.PolygonMixin
*/
export default Ember.Component.extend( SvgMixin, PolygonMixin, {

    layout: layout,

    /**
      @property direction
      @type {String}
    */
	direction: null,

    /**
      This value is used to set the height and width of the svg element.  The
      value is pixels (`px`).  The default is 10.

      @property size
      @type {Number}
      @default 10
    */
	size: 10,

    /**
      This is an array of class names to be added to the svg element.

      @property className
      @type {Array}
      @default ['svg-triangle']
      @private
    */
    classNames: ['svg-triangle'],

    /**
      @property points
      @type {String}
      @readonly
      @private
    */
    points: Ember.computed('direction', 'size', function() {
        var points = [],
			size = this.get('size'),
            direction = this.get('direction');

            Ember.assert('`size` must be a number greater than zero', !isNaN(size) && size > 0);

		switch (direction)
		{
			case 'up':
			case 'u':
			case 'n':	points = [[0.5,0], 	[1,1], 		[0,1]	]; 	break;

			case 'down':
			case 'd':
			case 's': 	points = [[0,0], 	[1,0], 		[0.5,1]	]; 	break;

			case 'left':
			case 'l':
			case 'w': 	points = [[0,0.5], 	[1,0], 		[1,1]	];	break;

			case 'right':
			case 'r':
			case 'e':   points = [[0,0], 	[1,0.5], 	[0,1]	];	break;
            default:	points = [[0,0], 	[1,0.5], 	[0,1]	];	break;
		}

		points = points.map(function (p) {
			p = p.map(function (p) {
				return p * size;
			});
			return p.join(',');
		});

		return points.join(' ');
    })
});
