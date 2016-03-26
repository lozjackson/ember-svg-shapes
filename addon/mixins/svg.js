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
    @default ['style', 'viewBox', 'preserveAspectRatio']
    @private
  */
  attributeBindings: ['style', 'viewBox', 'preserveAspectRatio'],

  /**
    This value is used to set the height and width of the svg element.  The
    value is pixels (`px`).  The default is 10.

    @property size
    @type {Number}
    @default 10
  */
  size: 10,

  /**
    The stroke color.  Use this with `strokeWidth` to set a border around the shape.

    ```
    {{svg-triangle stroke="blue" strokeWidth="2"}}
    ```

    @property stroke
    @type {String}
    @default 'black'
  */
  stroke: 'black',

  /**
    The stroke width.    Use this with `stroke` to set a border around the shape.

    ```
    {{svg-triangle strokeWidth="2" stroke="blue"}}
    ```

    @property strokeWidth
    @type {Number}
    @default 0
  */
  strokeWidth: 0,

  /**
    The fill color.

    ```
    {{svg-triangle fill="blue"}}
    ```

    @property fill
    @type {String}
  */
  fill: '',

  /**
    Rotate the shape.

    @property rotate
    @type {Number}
    @default 0
  */
  rotate: 0,

  /**
    @property preserveAspectRatio
    @type {String}
    @private
    @default `xMidYMid meet`
  */
  preserveAspectRatio: 'xMidYMid meet',

  /**
    This is a computed property.  It sets the height and width of the svg element.

    @property style
    @type {String}
    @private
  */
  style: Ember.computed('size', function() {
      let size = this.get('size');
      Ember.assert('`size` must be a number greater than zero', !isNaN(size) && size > 0);
      return Ember.String.htmlSafe(`height:${size}px; width:${size}px;`);
  }),

  /**
    @property viewBox
    @type {String}
    @private
  */
  viewBox: Ember.computed( 'size', 'strokeWidth', function() {
    let size = this.get('size');
    Ember.assert('`size` must be a number greater than zero', !isNaN(size) && size > 0);

    let strokeWidth = this.get('strokeWidth'),
      offset = strokeWidth / 2,
      x = offset * -1,
      s = parseFloat(size) + parseFloat(offset * 2);

    return `${x} ${x} ${s} ${s}`;
  }),

  /**
    This is a computed property.  It sets the `transform` attribute  of the
    polygon element.

    @property transform
    @type {String}
    @readonly
    @private
  */
  transform: Ember.computed( 'rotate', 'size', function() {
    let rotate = this.get('rotate'),
      size = this.get('size'),
      center;

    if (!rotate || isNaN(rotate)) {
      rotate = 0;
    }

    Ember.assert('`size` must be a number greater than zero', !isNaN(size) && size > 0);

    center = size / 2;

    Ember.assert('`center` must be a number greater than zero', !isNaN(center) && center > 0);

    return `rotate(${rotate}, ${center}, ${center})`;
  })
});
