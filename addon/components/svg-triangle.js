/**
  @module svg-shapes
*/
import Ember from 'ember';
import layout from '../templates/components/svg-triangle';

/**
  @class SvgTriangleComponent
  @namespace SvgShapes
*/
export default Ember.Component.extend({

    layout: layout,

    /**
      @property tagName
      @type {String}
      @private
      @default 'svg'
    */
    tagName: 'svg',

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
      @property className
      @type {Array}
      @default ['svg-triangle']
      @private
    */
    classNames: ['svg-triangle'],

    /**
      @property attributeBindings
      @type {Array}
      @default ['style']
      @private
    */
    attributeBindings: ['style'],

    /**
      This is a computed property.  It sets the height and width of the svg element.
      @property style
      @type {String}
      @private
    */
    style: Ember.computed('size', function() {
        var size = this.get('size');
        return Ember.String.htmlSafe('width:' + size + 'px; height:' + size + 'px;');
    }),

    /**
      @property points
      @type {String}
      @private
    */
    points: Ember.computed('direction', 'size', function() {
        var points,
			size = parseInt(this.get('size')),
            direction = this.get('direction');

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
