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
    classNames: ['ember-svg-shapes', 'svg-rectangle'],

    /**
      The height of the svg image.

      @property height
      @type {Number}
      @default 10
    */
    height: 10,

    /**
      The width of the svg image.

      @property width
      @type {Number}
      @default 10
    */
    width: 10,

    /**
      This is a computed property.  It sets the height and width of the svg element.

      @property style
      @type {String}
      @private
    */
    style: Ember.computed('height', 'width', function() {
        var height = this.get('height'),
            width = this.get('width');
        return Ember.String.htmlSafe('height:' + height + 'px; width:' + width + 'px;');
    })
});
