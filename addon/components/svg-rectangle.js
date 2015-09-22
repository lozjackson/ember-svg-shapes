/**
  @module ember-svg-shapes
*/
import Ember from 'ember';
import SvgMixin from 'ember-svg-shapes/mixins/svg';
import RectMixin from 'ember-svg-shapes/mixins/rect';
import layout from '../templates/components/svg-rectangle';

/**
  @class SvgRectangleComponent
  @namespace SvgShapes.Components
  @uses SvgShapes.Mixins.SvgMixin
  @uses SvgShapes.Mixins.RectMixin
*/
export default Ember.Component.extend( SvgMixin, RectMixin, {

    layout: layout,

    /**
      This is an array of class names to be added to the svg element.

      @property className
      @type {Array}
      @default ['ember-svg-shapes', 'svg-rectangle']
      @private
    */
    classNames: ['ember-svg-shapes', 'svg-rectangle']
});
