<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Rug

> [SVG][svg] rug component.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

<!-- <figure class="figure" align="center" label="fig:intro_plot" src="./srv/scripts/fig_intro_plot.js" alt="Scatterplot with rug plots along the axes."> -->

<!-- TODO: add figure -->

<!-- </figure> -->

A **rug plot** provides a compact 1-dimensional visualization to supplement higher dimensional plots by displaying a [marginal distribution][marginal-distribution] along one axis. Displaying a [marginal distribution][marginal-distribution] is useful in helping reveal the "shape" of data, especially when visual space is limited.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var Rug = require( '@stdlib/plot/components/svg/rug' );
```

#### Rug( \[options] )

Returns a `Rug` instance.

```javascript
var node = new Rug();
// returns <Rug>
```

The constructor accepts the following `options`:

-   **autoRender**: `boolean` indicating whether to re-render on a `'change'` event. Default: `true`.
-   **color**: tick (tassel) color. May be either a `string` or a `function`. Default: `'#aaa'`.
-   **data**: array-like `object` containing tick data. Default: `[]`.
-   **isDefined**: predicate function indicating whether a datum is defined. By default, the function treats `NaN` values as undefined data values.
-   **label**: tick (tassel) label. May be either a `string` or a `function`. Default: `''`.
-   **opacity**: tick (tassel) opacity. Must be on the interval `[0,1]`. Default: `0.9`.
-   **orientation**: rug orientation. Must be either bottom, top, right, or left. Default: `'bottom'`.
-   **scale**: scale function which maps data values to coordinates.
-   **size**: tick (tassel) size. Default: `6` pixels.

To specify rug plot options at instantiation, provide an `options` object.

```javascript
var opts = {
    'data': [ 0.1, 0.3, 0.5 ],
    'color': '#ff0000',
    'label': 'group-1',
    'opacity': 0.7,
    'orientation': 'bottom',
    'size': 5,
    'autoRender': false
};

var node = new Rug( opts );
// returns <Rug>
```

* * *

### Properties

<a name="property-autorender"></a>

#### Rug.prototype.autoRender

**Writable** property which specifies whether an instance re-renders on each `'change'` event.

```javascript
var node = new Rug({
    'autoRender': false
});

var mode = node.autoRender;
// returns false
```

<a name="property-color"></a>

#### Rug.prototype.color

**Writable** property which specifies tick (tassel) color. A color value may be either a `string` or an accessor `function`.

```javascript
var node = new Rug({
    'color': 'steelblue'
});

var color = node.color;
// returns <Function>
```

When retrieved, the returned value is always an accessor which accepts two parameters:

-   **d**: datum
-   **i**: datum index

<a name="property-data"></a>

#### Rug.prototype.data

**Writable** property which specifies the tick (tassel) data.

```javascript
var node = new Rug({
    'data': [ 0.1, 0.2, 0.3 ]
});

var data = node.data;
// returns [ 0.1, 0.2, 0.3 ]
```

<a name="property-isdefined"></a>

#### Rug.prototype.isDefined( d, i )

**Writable** property whose value is a predicate `function` which indicates whether a datum is defined and thus determines how missing values are encoded. When invoked, the function is provided two arguments:

-   **d**: datum.
-   **i**: datum index.

```javascript
function isDefined( d ) {
    return ( d !== null );
}

var node = new Rug({
    'isDefined': isDefined
});

node.isDefined = isDefined;
// returns <Function>
```

The default function behavior defines `NaN` data values as undefined.

<a name="property-label"></a>

#### Rug.prototype.label

**Writable** property specifying a tick (tassel) label. A label value may be either a `string` or an accessor `function`.

```javascript
var node = new Rug({
    'label': 'group-1'
});

var label = node.label;
// returns <Function>
```

When retrieved, the returned value is always an accessor which accepts two parameters:

-   **d**: datum.
-   **i**: datum index.

<a name="property-opacity"></a>

#### Rug.prototype.opacity

**Writable** property specifying tick (tassel) opacity. An opacity value may be either a `number` or an accessor `function`.

```javascript
var node = new Rug({
    'opacity': 0.5
});

var opacity = node.opacity;
// returns <Function>
```

When retrieved, the returned value is always an accessor which accepts two parameters:

-   **d**: datum.
-   **i**: datum index.

<a name="property-orientation"></a>

#### Rug.prototype.orientation

**Writable** property specifying the rug plot orientation.

```javascript
var node = new Rug({
    'orientation': 'left'
});

var orient = node.orientation;
// returns 'left'
```

An orientation may be one of the following values:

-   **bottom**: bottom orientation (default)
-   **top**: top orientation
-   **left**: left orientation
-   **right**: right orientation

<a name="property-scale"></a>

#### Rug.prototype.scale

**Writable** property providing a function which maps data values to coordinate values.

```javascript
function scale( d, i ) {
    console.log( d, i );
    return d;
}

var node = new Rug({
    'scale': scale
});

var fcn = node.scale;
// returns <Function>
```

<a name="property-size"></a>

#### Rug.prototype.size

**Writable** property specifying tick (tassel) size.

```javascript
var node = new Rug({
    'size': 5
});

var size = node.size;
// returns 5
```

* * *

### Methods

<a name="method-render"></a>

#### Rug.prototype.render()

Renders an instance as a [virtual DOM tree][virtual-dom].

```javascript
var node = new Rug({
    'data': [ 0.1 ]
});

var vtree = node.render();
/* e.g., returns
    {
        'tagName': 'g',
        'properties': {
            'property': 'rug',
            'className': 'rug',
            'namespace': void 0
        },
        'children': [
            {
                'tagName': 'line',
                'properties': {
                    'property': 'rug.tick',
                    'className': 'tick',
                    'attributes': {
                        'fill': 'none',
                        'opacity': 0.9,
                        'stroke': '#aaa',
                        'stroke-width': 1,
                        'data-label': '',
                        'y1': 0,
                        'y2': -6,
                        'x1': 0.1,
                        'x2': 0.1
                    },
                    'namespace': void 0
                },
                'children': [],
                'namespace': 'http://www.w3.org/2000/svg',
                'count': 0,
                'hasWidgets': false,
                'hasThunks': false,
                'descendantHooks': false,
                'hooks': void 0,
                'key': void 0
            }
        ],
        'namespace': 'http://www.w3.org/2000/svg',
        'count': 3,
        'hasWidgets': false,
        'hasThunks': false,
        'descendantHooks': false,
        'hooks': void 0,
        'key': void 0
    }
*/
```

* * *

### Events

<a name='event-render'></a>

#### 'render'

Event emitted when an instance renders. The event object is the rendered [Virtual DOM tree][virtual-dom].

```javascript
var node = new Rug();

function onRender( vtree ) {
    console.log( vtree );
}

// Attach an event listener:
node.on( 'render', onRender );

// Render an instance:
node.render();
```

* * *

### Listeners

<a name='listener-change'></a>

#### 'change'

If `autoRender` is `true`, upon receiving a `'change'` event, an instance re-renders.

```javascript
var node = new Rug({
    'autoRender': true
});

function onRender( vtree ) {
    console.log( vtree );
}

// Attach an event listener:
node.on( 'render', onRender );

// Manually trigger a change event:
node.emit( 'change' );
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

* * *

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var toHTML = require( 'vdom-to-html' );
var rug = require( '@stdlib/plot/components/svg/rug' );

// Create a new rug component:
var opts = {
    'data': [ 0.10, 0.50, 0.90 ],
    'orientation': 'bottom'
};
var r = rug( opts );

// Render as a virtual DOM tree:
var vtree = r.render();

// Transform the virtual DOM tree to HTML:
var html = toHTML( vtree );
// returns <g property="rug" class="rug"><line property="rug.tick" class="tick" fill="none" opacity="0.9" stroke="#aaa" stroke-width="1" data-label="" y1="0" y2="-6" x1="0.1" x2="0.1"></line><line property="rug.tick" class="tick" fill="none" opacity="0.9" stroke="#aaa" stroke-width="1" data-label="" y1="0" y2="-6" x1="0.5" x2="0.5"></line><line property="rug.tick" class="tick" fill="none" opacity="0.9" stroke="#aaa" stroke-width="1" data-label="" y1="0" y2="-6" x1="0.9" x2="0.9"></line></g>

// Listen for 'render' events (e.g., when triggered due to changes in state):
r.on( 'render', onRender );

setTimeout( update, 1000 );

function update() {
    r.data = [ 0.99, 0.87, 0.92 ];
}

function onRender( vtree ) {
    console.log( toHTML( vtree ) );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[svg]: https://www.w3.org/Graphics/SVG/

[virtual-dom]: https://github.com/Matt-Esch/virtual-dom

[marginal-distribution]: https://en.wikipedia.org/wiki/Marginal_distribution

</section>

<!-- /.links -->
