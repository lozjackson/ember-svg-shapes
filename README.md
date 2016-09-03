# Ember-svg-shapes

Ember-svg-shapes provides some basic shapes in the form of svg images, wrapped in ember components.




## Demo

http://lozjackson.github.io/ember-svg-shapes/




## Installation

* `ember install ember-svg-shapes`




## Available shapes

* svg-circle

  ```hbs
  {{svg-circle
    size="10"
    fill="red"
    stroke="black"
    strokeWidth="1"
    rotate="45" }}
  ```

* svg-square

  ```hbs
  {{svg-square
    size="10"
    fill="red"
    stroke="black"
    strokeWidth="1"
    rotate="45"
    radiusX="5"
    radiusY="10"}}
  ```

* svg-rectangle

  ```hbs
  {{svg-rectangle
    size="1"
    fill="red"
    stroke="black"
    strokeWidth="2"
    rotate="45"
    height="20"
    width="30"
    radiusX="5"
    radiusY="10"}}
  ```

* svg-triangle

  ```hbs
  {{svg-triangle
    size="10"
    fill="red"
    stroke="black"
    strokeWidth="1"
    rotate="180"
    direction="right"}}
  ```

* svg-star

  ```hbs
  {{svg-star
    size="50"
    fill="red"
    stroke="black"
    strokeWidth="2"
    rotate="45"
    starPoints="5"
    innerPoints="1.4"}}
  ```

All the parameters are optional.




## Styling

Add css class names to the component and style as you would normally do with an svg element.

```css
.svg-triangle.green {
    fill: rgb(152, 208, 46);
}
```

```hbs
{{svg-triangle class="green"}}
```




## Troubleshooting

If you get an error saying:

`Refused to apply inline style because it violates the following Content Security Policy directive: "style-src 'self'"`.

You need to add/modify the content security policy directive.  In the `config/environment.js` file you need to have `'unsafe-inline'` in the `style-src`.

```js
ENV.contentSecurityPolicy = {
  'style-src': "'self' 'unsafe-inline'"
}
```

## Compatibility

Ember version >= 1.13.13
