<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# unary5dBy

> Apply a unary function to each element retrieved from a five-dimensional nested input array according to a callback function and assign results to elements in a five-dimensional nested output array.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var unary5dBy = require( '@stdlib/array/base/unary5d-by' );
```

#### unary5dBy( arrays, shape, fcn, clbk\[, thisArg] )

Applies a unary function to each element retrieved from a five-dimensional nested input array according to a callback function and assigns results to elements in a five-dimensional nested output array.

```javascript
var abs = require( '@stdlib/math/base/special/abs' );

function accessor( v ) {
    return v * 2.0;
}

var x = [ [ [ [ [ -1.0, -2.0 ], [ -3.0, -4.0 ] ] ] ] ];
var shape = [ 1, 1, 1, 2, 2 ];

unary5dBy( [ x, x ], shape, abs, accessor );
// x => [ [ [ [ [ 2.0, 4.0 ], [ 6.0, 8.0 ] ] ] ] ]
```

The function accepts the following arguments:

-   **arrays**: array-like object containing one input nested array and one output nested array.
-   **shape**: array shape.
-   **fcn**: unary function to apply to callback return values.
-   **clbk**: callback function.
-   **thisArg**: callback function execution context (optional).

The invoked callback function is provided the following arguments:

-   **value**: array element.
-   **indices**: current array element indices.
-   **arrays**: input and output arrays.

To set the callback execution context, provide a `thisArg`.

<!-- eslint-disable no-invalid-this -->

```javascript
var abs = require( '@stdlib/math/base/special/abs' );

function accessor( v ) {
    this.count += 1;
    return v * 2.0;
}

var context = {
    'count': 0
};

var x = [ [ [ [ [ -1.0, -2.0 ], [ -3.0, -4.0 ] ] ] ] ];
var y = [ [ [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ] ] ];

var shape = [ 1, 1, 1, 2, 2 ];

unary5dBy( [ x, y ], shape, abs, accessor, context );
// y => [ [ [ [ [ 2.0, 4.0 ], [ 6.0, 8.0 ] ] ] ] ]

var cnt = context.count;
// returns 4
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If a provided callback function does not return any value (or equivalently, explicitly returns `undefined`), the value is **ignored**.

    ```javascript
    var abs = require( '@stdlib/math/base/special/abs' );

    function accessor() {
        // No-op...
    }

    var x = [ [ [ [ [ -1.0, -2.0 ], [ -3.0, -4.0 ] ] ] ] ];
    var y = [ [ [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ] ] ];

    var shape = [ 1, 1, 1, 2, 2 ];

    unary5dBy( [ x, y ], shape, abs, accessor );
    // y => [ [ [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ] ] ]
    ```

-   The function assumes that the input and output arrays have the same shape.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var bernoulli = require( '@stdlib/random/base/bernoulli' );
var filled5dBy = require( '@stdlib/array/base/filled5d-by' );
var zeros5d = require( '@stdlib/array/base/zeros5d' );
var abs = require( '@stdlib/math/base/special/abs' );
var unary5dBy = require( '@stdlib/array/base/unary5d-by' );

function accessor( v ) {
    // Randomly determine whether a value should be considered "missing":
    return ( bernoulli( 0.5 ) > 0 ) ? v : void 0;
}

var shape = [ 2, 1, 2, 3, 3 ];

var x = filled5dBy( shape, discreteUniform( -100, 100 ) );
console.log( x );

var y = zeros5d( shape );
console.log( y );

unary5dBy( [ x, y ], shape, abs, accessor );
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
