<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

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

# map4d

> Apply a function to elements in a four-dimensional nested input array and assign results to elements in a new four-dimensional nested output array.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var map4d = require( '@stdlib/array/base/map4d' );
```

#### map4d( x, shape, fcn\[, thisArg] )

Applies a function to elements in a four-dimensional nested input array and assigns results to elements in a new four-dimensional nested output array.

```javascript
var naryFunction = require( '@stdlib/utils/nary-function' );
var abs = require( '@stdlib/math/base/special/abs' );

var x = [ [ [ [ -1.0, -2.0 ], [ -3.0, -4.0 ] ] ] ];
var shape = [ 1, 1, 2, 2 ];

var y = map4d( x, shape, naryFunction( abs, 1 ) );
// returns [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ]
```

The function accepts the following arguments:

-   **x**: input nested array.
-   **shape**: array shape.
-   **fcn**: function to apply.
-   **thisArg**: applied function execution context (_optional_).

To set the applied function's execution context, provide a `thisArg`.

<!-- eslint-disable no-invalid-this -->

```javascript
function fcn( x ) {
    this.count += 1;
    return x;
}

var x = [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ];
var shape = [ 1, 1, 2, 2 ];

var ctx = {
    'count': 0
};

var y = map4d( x, shape, fcn, ctx );
// returns [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ]

var v = ctx.count;
// returns 4
```

#### map4d.assign( x, y, shape, fcn\[, thisArg] )

Applies a function to elements in a four-dimensional nested input array and assigns results to elements in a four-dimensional nested output array.

```javascript
var naryFunction = require( '@stdlib/utils/nary-function' );
var zeros4d = require( '@stdlib/array/base/zeros4d' );
var abs = require( '@stdlib/math/base/special/abs' );

var x = [ [ [ [ -1.0, -2.0 ], [ -3.0, -4.0 ] ] ] ];
var shape = [ 1, 1, 2, 2 ];

var y = zeros4d( shape );

var out = map4d.assign( x, y, shape, naryFunction( abs, 1 ) );
// returns [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ]

var bool = ( out === y );
// returns true
```

The function accepts the following arguments:

-   **x**: input nested array.
-   **y**: output nested array.
-   **shape**: array shape.
-   **fcn**: function to apply.
-   **thisArg**: applied function execution context (_optional_).

The function assumes that the input and output arrays have the same shape.

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var filled4dBy = require( '@stdlib/array/base/filled4d-by' );
var naryFunction = require( '@stdlib/utils/nary-function' );
var abs = require( '@stdlib/math/base/special/abs' );
var map4d = require( '@stdlib/array/base/map4d' );

var shape = [ 1, 3, 3, 3 ];

var x = filled4dBy( shape, discreteUniform( -100, 100 ) );
console.log( x );

var y = map4d( x, shape, naryFunction( abs, 1 ) );
console.log( y );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

</section>

<!-- /.links -->
