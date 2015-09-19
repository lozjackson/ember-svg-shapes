/**
  @module ember-svg-shapes
*/
import Ember from 'ember';
import SvgMixin from 'ember-svg-shapes/mixins/svg';
import layout from '../templates/components/svg-circle';

/**
  @class SvgCircleComponent
  @namespace SvgShapes
  @uses SvgShapes.SvgMixin
*/
export default Ember.Component.extend( SvgMixin, {

    layout: layout,

    /**
      @property className
      @type {Array}
      @default ['svg-circle']
      @private
    */
    classNames: ['svg-circle'],

    /**
      This value is used to set the height and width of the svg element.  The
      value is pixels (`px`).  The default is 10.

      @property size
      @type {Number}
      @default 10
    */
	size: 10,

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