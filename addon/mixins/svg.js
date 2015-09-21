/**
  @module ember-svg-shapes
*/
import Ember from 'ember';

/**
  @class SvgMixin
  @namespace SvgShapes.Mixins
*/
export default Ember.Mixin.create({

    /**
      @property tagName
      @type {String}
      @private
      @default 'svg'
    */
    tagName: 'svg',

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
      The stroke color.  Use this with `strokeWidth` to set a border around the shape.

        {{svg-triangle stroke="blue" strokeWidth="2"}}

      @property stroke
      @type {String}
      @default 'black'
    */
    stroke: 'black',

    /**
      The stroke width.    Use this with `stroke` to set a border around the shape.

        {{svg-triangle strokeWidth="2" stroke="blue"}}

      @property strokeWidth
      @type {Number}
      @default 0
    */
    strokeWidth: 0,

    /**
      The fill color.

            {{svg-triangle fill="blue"}}

      @property fill
      @type {String}
    */
    fill: ''
});
