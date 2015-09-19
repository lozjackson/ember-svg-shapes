/**
  @module ember-svg-shapes
*/
import Ember from 'ember';

/**
  @class SvgMixin
  @namespace SvgShapes
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
    fill: ''
});
