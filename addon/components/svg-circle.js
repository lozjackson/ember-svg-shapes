import Ember from 'ember';
import layout from '../templates/components/svg-circle';

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
      @property className
      @type {Array}
      @default ['svg-circle']
      @private
    */
    classNames: ['svg-circle'],

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
      This value is used to set the height and width of the svg element.  The
      value is pixels (`px`).  The default is 10.

      @property size
      @type {Number}
      @default 10
    */
	size: 10,

    /**
      @property stroke
      @type {String}
    */
    stroke: '',

    /**
      @property strokeWidth
      @type {Number}
      @default 0
    */
    strokeWidth: 0,

    /**
      @property fill
      @type {String}
    */
    fill: '',

    /**
      @property center
      @type {Number}
      @private
      @readonly
    */
    center: Ember.computed('size', function() {
        var size = this.get('size');
        return size / 2;
    }),

    /**
      @property radius
      @type {Number}
      @readonly
      @private
    */
    radius: Ember.computed('size', 'strokeWidth', function() {
        var size = this.get('size'),
            strokeWidth = this.get('strokeWidth');
        return size / 2 - (strokeWidth / 2);
    })
});
