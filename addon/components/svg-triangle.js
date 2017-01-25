/**
  @module ember-svg-shapes
*/
import Ember from 'ember';
import SvgMixin from 'ember-svg-shapes/mixins/svg';
import FilterMixin from 'ember-svg-shapes/mixins/filter';
import layout from '../templates/components/svg-triangle';

const { assert, computed, Component } = Ember;

/**
  # SvgTriangleComponent

  ```
  {{svg-triangle
    direction="left|right|up|down"
    size="number"
    strokeWidth="number"
    rotate="number of degrees"
    filter="filter id"
    class="class names"}}
  ```

  @class SvgTriangleComponent
  @namespace SvgShapes.Components
  @uses SvgShapes.Mixins.SvgMixin
  @uses SvgShapes.Mixins.FilterMixin
*/
export default Component.extend(SvgMixin, FilterMixin, {

  layout,

  /**
    @property direction
    @type {String}
  */
	direction: null,

  /**
    This is an array of class names to be added to the svg element.

    @property className
    @type {Array}
    @default ['ember-svg-shapes', 'svg-triangle']
    @private
  */
  classNames: ['ember-svg-shapes', 'svg-triangle'],

  /**
    @property points
    @type {String}
    @readonly
    @private
  */
  points: computed('direction', 'size', function() {
    let points = [],
		  size = this.get('size'),
      direction = this.get('direction');

    assert('`size` must be a number greater than zero', !isNaN(size) && size > 0);

	  switch (direction) {
		  case 'up':
		  case 'u':
		  case 'n':
        points = [[0.5,0], 	[1,1], 		[0,1]	];
        break;

    	case 'down':
    	case 'd':
    	case 's':
        points = [[0,0], 	[1,0], 		[0.5,1]	];
        break;

  		case 'left':
  		case 'l':
  		case 'w':
        points = [[0,0.5], 	[1,0], 		[1,1]	];
        break;

  		case 'right':
  		case 'r':
  		case 'e':
        points = [[0,0], 	[1,0.5], 	[0,1]	];
        break;

      default:
        points = [[0,0], 	[1,0.5], 	[0,1]	];
        break;
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
