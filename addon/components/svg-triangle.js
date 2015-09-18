import Ember from 'ember';
import layout from '../templates/components/svg-triangle';

export default Ember.Component.extend({

    layout: layout,

    tagName: 'svg',
	direction: null,
	size: "10",
	classNames: ['svg-triangle'],
	attributeBindings: ['style'],

    /*
      @property style
      @type {String}
    */
    style: Ember.computed('size', function() {
        var size = this.get('size');
		return ('width:' + size + 'px; height:' + size + 'px;').htmlSafe();
    }),

    /*
      @property points
      @type {String}
    */
    points: Ember.computed('direction', 'size', function() {
        var points,
			size = parseInt(this.get('size'));

		switch (this.get('direction'))
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
    }),
});
