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

# Annotations

> [SVG][svg] plot annotations.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var Annotations = require( '@stdlib/plot/components/svg/annotations' );
```

#### Annotations()

Returns an `Annotations` instance.

```javascript
var node = new Annotations();
// returns <Annotations>
```

* * *

### Methods

<a name="method-render"></a>

#### Annotations.prototype.render()

Renders an instance as a [Virtual DOM tree][virtual-dom].

```javascript
var node = new Annotations();

var vtree = node.render();
/* e.g., returns
    {
        'tagName': 'g',
        'properties': {
            'property': 'annotations',
            'className': 'annotations',
            'attributes': {
                'transform': 'translate(0,0)'
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
*/
```

* * *

### Events

<a name='event-render'></a>

#### 'render'

Event emitted when an instance renders. The event object is the rendered [Virtual DOM tree][virtual-dom].

```javascript
var node = new Annotations();

function onRender( vtree ) {
    console.log( vtree );
}

node.on( 'render', onRender );
node.render();
```

* * *

### Listeners

<a name='listener-change'></a>

#### 'change'

Upon receiving a `'change'` event, an instance re-renders.

```javascript
var node = new Annotations();

function onRender( vtree ) {
    console.log( vtree );
}

node.on( 'render', onRender );
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
var annotations = require( '@stdlib/plot/components/svg/annotations' );

// Create a new component:
var node = annotations();

// Render as a virtual DOM tree:
var vtree = node.render();

// Transform the virtual DOM tree to HTML:
var html = toHTML( vtree );
// returns <g property="annotations" class="annotations" transform="translate(0,0)"></g>
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

</section>

<!-- /.links -->
