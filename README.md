# Ember-svg-shapes

Ember-svg-shapes provides some basic shapes in the form of svg images, wrapped in ember components.

## Available shapes

* svg-triangle

    {{svg-triangle direction="left" size="12"}}

## Styling

Add css class names to the component and style as you would normally do with an svg element.

    .svg-triangle.green {
        fill: rgb(152, 208, 46);
    }

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

## Troubleshooting

If you get an error saying:

    Refused to apply inline style because it violates the following Content Security Policy directive: "style-src 'self'".

You need to add/modify the content security policy directive.  In the `config/environment.js` file you need to have `'unsafe-inline'` in the `style-src`.

    ENV.contentSecurityPolicy = {
      'style-src': "'self' 'unsafe-inline'"
    }
