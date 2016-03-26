/**
  @module ember-svg-shapes
*/
import Ember from 'ember';
import layout from '../templates/components/filter-drop-shadow';

/**
  @class FilterDropShadowComponent
  @namespace SvgShapes.Components
*/
export default Ember.Component.extend({
  layout,

  /**
    @property tagName
    @type {String}
    @private
    @default 'filter'
  */
  tagName: 'filter',

  /**
    @property stdDeviation
    @type {Number}
  */
  stdDeviation: 3,

  /**
    @property dx
    @type {Number}
  */
  dx: 1,

  /**
    @property dy
    @type {Number}
  */
  dy: 1
});
