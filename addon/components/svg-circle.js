/**
  @module ember-svg-shapes
*/
import Ember from 'ember';
import SvgMixin from 'ember-svg-shapes/mixins/svg';
import FilterMixin from 'ember-svg-shapes/mixins/filter';
import layout from '../templates/components/svg-circle';

/**
  @class SvgCircleComponent
  @namespace SvgShapes.Components
  @uses SvgShapes.Mixins.SvgMixin
  @uses SvgShapes.Mixins.FilterMixin
*/
export default Ember.Component.extend(SvgMixin, FilterMixin, {

  layout,

  /**
    This is an array of class names to be added to the svg element.

    @property className
    @type {Array}
    @default ['ember-svg-shapes', 'svg-circle']
    @private
  */
  classNames: ['ember-svg-shapes', 'svg-circle'],

  /**
    This is a computed property that sets the radius of the circle.

    @property radius
    @type {Number}
    @readonly
    @private
  */
  radius: Ember.computed('size', function() {
    let size = this.get('size'),
      radius = size / 2;

    Ember.assert('`radius` must be a number greater than zero', !isNaN(radius) && radius > 0);

    return radius;
  }),

  /**
    This is an alias of `radius` and is used to set the center of the svg element.

    @property center
    @type {Number}
    @private
    @readonly
  */
  center: Ember.computed.alias('radius')
});
