/**
  @module svg-shapes
*/
import Ember from 'ember';
import layout from '../templates/components/svg-star';

/**
  @class SvgStarComponent
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
    classNames: ['svg-star'],

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

    transform: Ember.computed('direction', function() {
        return 'rotate(270, 50, 50)';
    }),

    /**
      @property points
      @type {String}
      @private
    */
    points: Ember.computed('direction', 'size', function() {
        var points = [], r, x, y,
			size = parseInt(this.get('size')),
            centerX = size / 2,
            centerY = size / 2,
            arms = 5,
            outerRadius = size / 2,
            innerRadius = size / 4,
            results = "",
            angle = Math.PI / arms;

        for (var i = 0, l = 2 * arms; i < l; i++)
        {
           // Use outer or inner radius depending on what iteration we are in.
           r = (i & 1) == 0 ? outerRadius : innerRadius;
           x = centerX + Math.cos(i * angle) * r;
           y = centerY + Math.sin(i * angle) * r;
           points.push([x, y].join(','));
        }
        return points.join(', ');
    })
});
