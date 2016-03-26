/**
  @module ember-svg-shapes
*/
import Ember from 'ember';
import layout from '../templates/components/svg-filters';

/**
  @class SvgFiltersComponent
  @namespace SvgShapes.Components
*/
export default Ember.Component.extend({
  layout,

  /**
    @property tagName
    @type {String}
    @private
    @default 'svg'
  */
  tagName: 'svg',

  /**
    This is an array of class names to be added to the svg element.

    @property className
    @type {Array}
    @default ['ember-svg-shapes', 'svg-filters']
    @private
  */
  classNames: ['ember-svg-shapes', 'svg-filters'],
});
